import Link from 'next/link'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/icon'
import { Badge } from '@/components/ui/badge'
import ExperienceCard from '@/components/experience-card'
import { CardContent } from '@/components/ui/card'

type SocialIconName = 'discord' | 'facebook' | 'github'

const socialIcons: {
  name: string
  href: string
  external: boolean
  icon: SocialIconName // Ensure the icon property matches the defined type
}[] = [
  {
    name: 'Discord',
    href: 'https://discord.com/',
    external: true,
    icon: 'discord',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    external: true,
    icon: 'facebook',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    external: true,
    icon: 'github',
  },
  // Add other social icons if needed
]
export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="z-100 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Jonathan Avison
          </h1>
          <h2 className="mt-4 text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Composer
          </h2>
          <p className="mt-4 max-w-xs text-slate-400">
            Building and creating harmonious products with modern tools for the
            web and music industry.
          </p>
          <nav className="rtl hidden h-full lg:block ">
            <ul className="inset-x-8 mt-24 flex w-64 flex-col gap-4 px-8 py-8">
              <a
                href="#about"
                className="group flex items-center text-foreground"
              >
                <span className="nav-indicator mr-4 h-px w-8 transition-all motion-reduce:transition-none"></span>
                <span className="">About</span>
              </a>
              <a
                href="#experiences"
                className="group flex items-center text-foreground"
              >
                <span className="nav-indicator mr-4 h-px w-8 transition-all motion-reduce:transition-none"></span>
                <span className="">Experiences</span>
              </a>
            </ul>
          </nav>

          <ul className="ml-1 mt-8 flex items-center" aria-label="Social Media">
            {socialIcons.map((item, index) => (
              <li className="mr-5 text-xs" key={`${index}-${item.name}`}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : ''}
                  rel={item.external ? 'noreferrer' : ''}
                  className="flex items-center space-x-2"
                >
                  <Icon name={item.icon} className="h-6 w-6 text-slate-400" />
                  <span className="sr-only">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main id="content" className="pt-24 text-foreground lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
          aria-label="About me"
        >
          <div className="max-w-screen sticky top-0 z-20 -mx-6 mb-6 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-slate-900/20 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
            <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h2>
          </div>
          <div>
            <p className="mb-8 text-base leading-relaxed text-slate-400">
              I am a technology enthusiast, a fast learner and good listener. I
              have a lot of experience with creative software, creating music
              and organization of differentlife event projects.
            </p>
            <p className="mb-4 text-base leading-relaxed text-slate-400">
              {' '}
              My self iniciativeness and team spirit makes me fastly adaptive to
              new and dynamic environments. my wife describes me as really
              funny, super intelligent and incredibly handsome (so she said I
              can not come to work in suits, but I promise I will wear a clan
              hoody). Looking forward to meet you and bring the best I can to
              the team
            </p>
          </div>
        </section>
        <section
          id="experiences"
          className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work Experiences"
        >
          <div className="max-w-screen sticky top-0 z-20 -mx-6 mb-6 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-slate-900/20 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
            <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Work Experiences
            </h2>
          </div>
          <div>
            <ol className="group/list">
              <ExperienceCard
                title={'Full-Stack Developer'}
                dateRange={'2023-Present'}
                description={
                  'Developer, UI/UX Designer and architect for the music platform TunedSphere'
                }
                link={'dsfsdf'}
                skills={[
                  'React',
                  'NextJs',
                  'SCSS',
                  'JavaScript',
                  'TypeScript',
                  'MySQL',
                  'ORM',
                ]}
                key={'q'}
              ></ExperienceCard>
              <ExperienceCard
                title={'Sound & Light Director And Technician'}
                dateRange={'2023-Present'}
                description={
                  'Technical Director at Arto Theatre and General stage manager for 9 performing arts companies. 12,000 spectators on average per year'
                }
                link={'dsfsdf'}
                skills={''}
                key={'q'}
              ></ExperienceCard>
              <ExperienceCard
                title={'Sound, lighting & Decorations Technician'}
                dateRange={'2023-Present'}
                description={
                  'Preparation of the venue and site for a large event structure Major concert and show programmer in Lyon'
                }
                link={'dsfsdf'}
                skills={['React', 'Next.js', 'Tailwind CSS']}
                key={'q'}
              ></ExperienceCard>
            </ol>
          </div>
        </section>
      </main>
    </div>
  )
}
