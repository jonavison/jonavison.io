'use client'
import { ThemeToggle } from '@/components/theme-toggle'
import { useEffect } from 'react'
import '@/styles/globals.css'
interface HomeLayoutProps {
  children: React.ReactNode
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const x = e.pageX
      const y = e.pageY
      document.documentElement.style.setProperty('--x', `${x}px`)
      document.documentElement.style.setProperty('--y', `${y}px`)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <>
      <div className="fixed h-[100%] w-full bg-gradient-to-r from-violet-900 via-purple-500/40 to-pink-500 opacity-10 blur-sm"></div>
      <div className="mouse-cursor-gradient-tracking fixed min-h-full w-full"></div>
      <main className="z-1000 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        {children}
      </main>
    </>
  )
}
