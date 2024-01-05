'use client'
import React, { useEffect, useState, useRef } from 'react'
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

// Function to handle scroll event
export default function Home() {
  const [isScrolledToExperience, setIsScrolledToExperience] = useState(false)
  const [isScrolledToAbout, setIsScrolledToAbout] = useState(false)
  const [isScrolledToProjects, setIsScrolledToProjects] = useState(false)

  const experiencesSectionRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const projectsSectionRef = useRef(null)

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === 'experiences-section') {
          setIsScrolledToExperience(entry.isIntersecting)
        } else if (entry.target.id === 'about-section') {
          setIsScrolledToAbout(entry.isIntersecting)
        } else if (entry.target.id === 'projects-section') {
          setIsScrolledToProjects(entry.isIntersecting)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    if (experiencesSectionRef.current) {
      observer.observe(experiencesSectionRef.current)
    }
    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current)
    }
    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current)
    }

    return () => {
      if (experiencesSectionRef.current) {
        observer.unobserve(experiencesSectionRef.current)
      }
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current)
      }
      if (projectsSectionRef.current) {
        observer.unobserve(projectsSectionRef.current)
      }
    }
  }, [])
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="z-100 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-loose tracking-tight text-foreground sm:text-5xl">
            Jonathan Avison
          </h1>
          <h2 className="ml-1 mt-4 text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Composer
          </h2>
          <p className="ml-1 mt-4 max-w-xs text-slate-400">
            Building and creating harmonious products with modern tools for the
            web and music industry.
          </p>
          <nav className="hidden h-full lg:block ">
            <ul className="inset-x-8 mt-24 flex w-max flex-col gap-4 px-8 py-8">
              <a
                id="about-nav"
                className="group flex cursor-pointer items-center text-foreground"
                onClick={() => handleNavClick(aboutSectionRef)}
              >
                <span
                  className={`nav-indicator mr-4 transition-all motion-reduce:transition-none ${
                    isScrolledToAbout ? 'block h-[2px] w-[56px]' : 'h-px w-8'
                  }`}
                ></span>
                <span
                  className={`font-medium hover:text-foreground ${
                    isScrolledToAbout
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  ABOUT
                </span>
              </a>
              <a
                id="experiences-nav"
                className="group flex cursor-pointer items-center"
                onClick={() => handleNavClick(experiencesSectionRef)}
              >
                <span
                  className={`nav-indicator mr-4 transition-all motion-reduce:transition-none ${
                    isScrolledToExperience
                      ? 'block h-[2px] w-[56px]'
                      : 'h-px w-8'
                  }`}
                ></span>
                <span
                  className={`font-medium hover:text-foreground ${
                    isScrolledToExperience
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  EXPERIENCES
                </span>
              </a>
              <a
                id="projects-nav"
                className="group flex cursor-pointer items-center"
                onClick={() => handleNavClick(projectsSectionRef)}
              >
                <span
                  className={`nav-indicator mr-4 transition-all motion-reduce:transition-none ${
                    isScrolledToProjects ? 'block h-[2px] w-[56px]' : 'h-px w-8'
                  }`}
                ></span>
                <span
                  className={`font-medium hover:text-foreground ${
                    isScrolledToProjects
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  PROJECTS
                </span>
              </a>
            </ul>
          </nav>

          <ul className="ml-1 mt-8 flex items-center" aria-label="Social Media">
            {socialIcons.map((item, index) => (
              <Link
                key={`${index}-${item.name}`}
                href={item.href}
                target={item.external ? '_blank' : ''}
                rel={item.external ? 'noreferrer' : ''}
                className="mr-5 flex items-center space-x-2 text-xs"
              >
                <Icon name={item.icon} className="h-6 w-6 text-slate-400" />
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </ul>
        </div>
      </header>
      <main id="content" className="pt-24 text-foreground lg:w-1/2 lg:py-24">
        <section
          id="about-section"
          className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
          aria-label="About me"
          ref={aboutSectionRef}
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
          id="experiences-section"
          className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work Experiences"
          ref={experiencesSectionRef}
        >
          <div className="max-w-screen sticky top-0 z-20 -mx-6 mb-6 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-slate-900/20 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
            <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Work Experiences
            </h2>
          </div>
          <div>
            <ol className="group/list">
              <li className="mb-12">
                <div className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg from-indigo-900/20 to-purple-900/20 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                    2023 - Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="leading-snug">
                      <div className="relative mb-2">
                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                        <Link
                          href="/"
                          className="group/link decoration- inline-flex text-xl font-medium text-slate-200 focus-visible:text-teal-300"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`front-end dev at TunedSphere`}
                        >
                          Full-Stack Developer
                        </Link>
                      </div>
                      <div>
                        <p className="mb-4 text-base text-slate-400">
                          Developer, UI/UX Designer and architect for the music
                          platform TunedSphere
                        </p>
                        <div className="">
                          <Badge className="mx-1.5 mb-2">React</Badge>
                          <Badge className="mx-1.5 mb-2">NextJs</Badge>
                          <Badge className="mx-1.5 mb-2">SCSS</Badge>
                          <Badge className="mx-1.5 mb-2">JavaScript</Badge>
                          <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                          <Badge className="mx-1.5 mb-2">MySql</Badge>
                          <Badge className="mx-1.5 mb-2">React</Badge>
                          <Badge className="mx-1.5 mb-2">React</Badge>
                        </div>
                      </div>
                    </h3>
                  </div>
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg from-indigo-900/20 to-purple-900/20 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                    2020
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug ">
                      <div className="relative mb-2">
                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                        <Link
                          href="/"
                          className="group/link decoration- inline-flex text-xl font-medium text-slate-200 focus-visible:text-teal-300"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`front-end dev at `}
                        >
                          Sound & Light Director And Technician
                        </Link>
                      </div>
                      <div>
                        <p className="mb-4 text-slate-400">
                          Preparation of the venue and site for a large event
                          structure Major concert and show programmer in Lyon
                        </p>
                        <div className=""></div>
                      </div>
                    </h3>
                  </div>
                </div>
              </li>

              <li className="mb-12">
                <div className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg from-indigo-900/20 to-purple-900/20 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                    2020
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug ">
                      <div className="relative mb-2">
                        <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                        <Link
                          href="/"
                          className="group/link decoration- inline-flex text-xl font-medium text-slate-200 focus-visible:text-teal-300"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`front-end dev at `}
                        >
                          Sound, lighting & Decorations Technician
                        </Link>
                      </div>
                      <div>
                        <p className="mb-4 text-slate-400">
                          Technical Director at Arto Theatre and General stage
                          manager for 9 performing arts companies. 12,000
                          spectators on average per year
                        </p>
                        <div className=""></div>
                      </div>
                    </h3>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section
          id="projects-section"
          className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work in Progress"
          ref={projectsSectionRef}
        >
          Projects
        </section>
      </main>
    </div>
  )
}
