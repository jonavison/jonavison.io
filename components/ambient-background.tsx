'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function supportsWebGpu() {
  return typeof navigator !== 'undefined' && 'gpu' in navigator
}

function CssFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed inset-0 -z-10 overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1528]/65 via-background to-[#0c1220]" />
      <div
        className="absolute h-[75vmin] w-[75vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: 'var(--pointer-x, 25%)',
          top: 'var(--pointer-y, 28%)',
          opacity: 'var(--spotlight-opacity, 0.38)',
          background:
            'radial-gradient(circle, rgba(232,120,180,0.2) 0%, rgba(90,70,200,0.12) 38%, rgba(80,200,220,0.06) 58%, transparent 72%)',
        }}
      />
      <div className="absolute -left-1/4 top-1/4 h-[55vmin] w-[55vmin] rounded-full bg-fuchsia-400/7 blur-3xl" />
      <div className="absolute -right-1/5 bottom-1/4 h-[50vmin] w-[50vmin] rounded-full bg-sky-400/7 blur-3xl" />
      <div className="absolute left-1/3 top-2/3 h-[40vmin] w-[40vmin] rounded-full bg-amber-400/4 blur-3xl" />
    </div>
  )
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [useFallback, setUseFallback] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (prefersReducedMotion() || !supportsWebGpu()) {
      setUseFallback(true)
      const onMove = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return
        const xNorm = event.clientX / Math.max(1, window.innerWidth)
        const yNorm = event.clientY / Math.max(1, window.innerHeight)
        const sideFade = Math.min(1, Math.max(0, (xNorm - 0.32) / 0.6))
        const sideGain = 1 - sideFade * 0.74
        const sweet = Math.exp(-((xNorm - 0.25) * (xNorm - 0.25)) / 0.045)
        const opacity = (0.38 * sideGain * (0.94 + 0.12 * sweet)).toFixed(3)
        document.documentElement.style.setProperty(
          '--pointer-x',
          `${(xNorm * 100).toFixed(2)}%`
        )
        document.documentElement.style.setProperty(
          '--pointer-y',
          `${(yNorm * 100).toFixed(2)}%`
        )
        document.documentElement.style.setProperty('--spotlight-opacity', opacity)
      }
      window.addEventListener('pointermove', onMove, { passive: true })
      return () => window.removeEventListener('pointermove', onMove)
    }

    let stop: (() => void) | undefined
    let cancelled = false

    const onFailed = () => {
      if (!cancelled) setUseFallback(true)
    }
    canvas.addEventListener('ambient-failed', onFailed)

    void import('@/lib/ambient-renderer').then(({ startAmbientRenderer }) => {
      if (cancelled || !canvasRef.current) return
      setUseFallback(false)
      const handle = startAmbientRenderer(canvasRef.current)
      stop = () => handle.stop()
    })

    return () => {
      cancelled = true
      canvas.removeEventListener('ambient-failed', onFailed)
      stop?.()
    }
  }, [])

  return (
    <>
      {useFallback ? <CssFallback /> : null}
      <canvas
        ref={canvasRef}
        aria-hidden
        className={cn(
          'pointer-events-none fixed inset-0 -z-10 h-full w-full',
          useFallback ? 'opacity-0' : 'opacity-100'
        )}
      />
    </>
  )
}
