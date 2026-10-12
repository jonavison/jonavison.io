import { clock, effect, frameLoop, init, surface } from 'vgpu'
import type { FrameLoopHandle, Gpu } from 'vgpu'
import ambientGlowShader from '@/shaders/ambient-glow.wgsl'

const POINTER_LERP = 0.085
const IDLE_POINTER: [number, number] = [0.62, 0.28]

export type AmbientRendererHandle = {
  stop: () => void
}

type PointerState = {
  targetX: number
  targetY: number
  currentX: number
  currentY: number
  hasPointer: boolean
}

function writePointerCss(x: number, y: number) {
  // Match shader: peak near 25% left, fade toward the right content column
  const sideFade = Math.min(1, Math.max(0, (x - 0.32) / (0.92 - 0.32)))
  const sideGain = 1 - sideFade * 0.74
  const sweet = Math.exp(-((x - 0.25) * (x - 0.25)) / 0.045)
  const spotGain = sideGain * (0.94 + 0.12 * sweet)
  const opacity = (0.38 * spotGain).toFixed(3)

  document.documentElement.style.setProperty('--pointer-x', `${(x * 100).toFixed(2)}%`)
  document.documentElement.style.setProperty('--pointer-y', `${(y * 100).toFixed(2)}%`)
  document.documentElement.style.setProperty('--spotlight-opacity', opacity)
}

/** Starts the soft WebGPU atmosphere on `canvas`. Returns a dispose function. */
export function startAmbientRenderer(canvas: HTMLCanvasElement): AmbientRendererHandle {
  let disposed = false
  let loop: FrameLoopHandle | undefined
  let gpu: Gpu | undefined
  let running = true

  const pointer: PointerState = {
    targetX: IDLE_POINTER[0],
    targetY: IDLE_POINTER[1],
    currentX: IDLE_POINTER[0],
    currentY: IDLE_POINTER[1],
    hasPointer: false,
  }

  const updateTargetFromEvent = (event: PointerEvent) => {
    const width = Math.max(1, window.innerWidth)
    const height = Math.max(1, window.innerHeight)
    pointer.targetX = Math.min(1, Math.max(0, event.clientX / width))
    pointer.targetY = Math.min(1, Math.max(0, event.clientY / height))
    pointer.hasPointer = true
    writePointerCss(pointer.targetX, pointer.targetY)
  }

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType === 'touch') return
    updateTargetFromEvent(event)
  }

  const onVisibility = () => {
    running = document.visibilityState === 'visible'
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  document.addEventListener('visibilitychange', onVisibility)
  writePointerCss(pointer.currentX, pointer.currentY)

  void (async () => {
    try {
      gpu = await init()
      if (disposed) {
        gpu.dispose()
        return
      }

      const canvasSurface = surface(gpu, canvas, { dpr: [1, 1.5] })
      const glow = effect(gpu, ambientGlowShader, {
        label: 'ambient-glow',
        set: {
          params: {
            time: 0,
            intensity: 0.58,
            pointer: [pointer.currentX, pointer.currentY],
            resolution: [canvasSurface.size[0], canvasSurface.size[1]],
          },
        },
      })

      canvasSurface.onResize(() => {
        glow.set({
          params: {
            resolution: [canvasSurface.size[0], canvasSurface.size[1]],
          },
        })
      })

      const time = clock(gpu)
      loop = frameLoop(gpu, (frame) => {
        if (!running) return

        pointer.currentX += (pointer.targetX - pointer.currentX) * POINTER_LERP
        pointer.currentY += (pointer.targetY - pointer.currentY) * POINTER_LERP

        if (!pointer.hasPointer) {
          const t = time.time * 0.12
          pointer.targetX = IDLE_POINTER[0] + Math.sin(t) * 0.08
          pointer.targetY = IDLE_POINTER[1] + Math.cos(t * 0.85) * 0.06
        }

        writePointerCss(pointer.currentX, pointer.currentY)

        glow.set({
          params: {
            time: time.time,
            pointer: [pointer.currentX, pointer.currentY],
          },
        })
        frame.pass(canvasSurface, glow)
      })
    } catch {
      // Caller shows CSS fallback when this fails.
      if (!disposed) {
        canvas.dataset.ambientFailed = 'true'
        canvas.dispatchEvent(new CustomEvent('ambient-failed'))
      }
      gpu?.dispose()
      gpu = undefined
    }
  })()

  return {
    stop() {
      disposed = true
      running = false
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
      loop?.stop()
      gpu?.dispose()
      loop = undefined
      gpu = undefined
    },
  }
}
