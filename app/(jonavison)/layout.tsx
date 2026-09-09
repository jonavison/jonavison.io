import { AmbientBackground } from '@/components/ambient-background'
import '@/styles/globals.css'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <AmbientBackground />
      <main className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        {children}
      </main>
    </>
  )
}
