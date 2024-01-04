import { ThemeToggle } from "@/components/theme-toggle";

interface HomeLayoutProps {
  children: React.ReactNode;
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (

    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
       <div className="w-full">
        <ThemeToggle></ThemeToggle>
       </div>
      {children}
    </main>
  );
}
