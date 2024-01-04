import { ThemeToggle } from '@/components/theme-toggle'

interface HomeLayoutProps {
  children: React.ReactNode
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <div className="absolute h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-sm"></div>
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="flex w-full justify-end py-4">
          <ThemeToggle />
        </div>
        {children}
      </main>
    </>
  )
}
