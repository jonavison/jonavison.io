'use client'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import '@/styles/globals.css'
import { Icon } from '@/components/icon'
import { Badge } from '@/components/ui/badge'
import { WorkExperiences } from '@/components/work-experiences'
import { AuboutMe } from '@/components/about-me'
import { Projects } from '@/components/projects'

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

    const experiencesRef = experiencesSectionRef.current
    const aboutRef = aboutSectionRef.current
    const projectsRef = projectsSectionRef.current

    if (experiencesRef) {
      observer.observe(experiencesRef)
    }
    if (aboutRef) {
      observer.observe(aboutRef)
    }
    if (projectsRef) {
      observer.observe(projectsRef)
    }

    // Cleanup function
    return () => {
      if (experiencesRef) {
        observer.unobserve(experiencesRef)
      }
      if (aboutRef) {
        observer.unobserve(aboutRef)
      }
      if (projectsRef) {
        observer.unobserve(projectsRef)
      }
    }
  }, [])
  return (
    <div className="z-50 lg:flex lg:justify-between lg:gap-4">
      <header className="z-100 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div className="">
          <h1 className="text-4xl font-bold leading-loose tracking-tight text-foreground sm:text-5xl">
            Jonathan Avison
          </h1>
          <h2 className="ml-1 mt-4 text-lg font-medium leading-relaxed tracking-wider text-foreground sm:text-xl">
            Composer & Developer
          </h2>
          <p className="ml-1 mt-4 max-w-xs text-slate-400">
            Building and creating harmonious products with modern tools for the
            web and music industry.
          </p>
          <nav className="hidden lg:block ">
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

          <ul
            className="ml-1 mt-8 flex h-full items-center"
            aria-label="Social Media"
          >
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
          <AuboutMe />
        </section>

        <section
          id="experiences-section"
          className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work Experiences"
          ref={experiencesSectionRef}
        >
          <WorkExperiences />
        </section>

        <section
          id="projects-section"
          className="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work in Progress"
          ref={projectsSectionRef}
        >
          <Projects />
        </section>
      </main>
    </div>
  )
}
