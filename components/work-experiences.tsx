import * as React from 'react'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { Icon } from './icon'

export function WorkExperiences() {
  return (
    <>
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
                      manager for 9 performing arts companies. 12,000 spectators
                      on average per year
                    </p>
                    <div className=""></div>
                  </div>
                </h3>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div>
        <span className="font-bold leading-6 tracking-tight text-cyan-500">
          View Full Résumé
        </span>
        <span className="transition group-hover:-translate-y-1 group-hover:translate-x-1">
          <Icon
            name="arrow-up-right"
            className="ml-1 h-5 w-5 font-bold text-cyan-500"
          ></Icon>
        </span>
      </div>
    </>
  )
}
