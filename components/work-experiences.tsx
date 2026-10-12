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
              <div className="card-pointer-sheen absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg opacity-0 transition-opacity motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:opacity-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                2024 — Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug">
                  <div className="relative mb-2">
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                    <Link
                      href="https://avison-soft.com/smile"
                      className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-teal-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Smile Laugh Mood ecosystem"
                    >
                      Indie apps · Smile, Laugh &amp; Mood
                    </Link>
                  </div>
                  <div>
                    <p className="mb-4 text-base text-slate-400">
                      Designing and shipping a local-first media ecosystem —
                      Smile for music, Laugh for video, Mood as the optional
                      sync layer. Soft products, privacy-first defaults, and
                      craft that still leaves room to smile.
                    </p>
                    <div className="">
                      <Badge className="mx-1.5 mb-2">Swift</Badge>
                      <Badge className="mx-1.5 mb-2">macOS</Badge>
                      <Badge className="mx-1.5 mb-2">iOS</Badge>
                      <Badge className="mx-1.5 mb-2">Next.js</Badge>
                      <Badge className="mx-1.5 mb-2">Hono</Badge>
                      <Badge className="mx-1.5 mb-2">Product</Badge>
                    </div>
                  </div>
                </h3>
              </div>
            </div>
          </li>

          <li className="mb-12">
            <div className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
              <div className="card-pointer-sheen absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg opacity-0 transition-opacity motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:opacity-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                2022 — Present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="leading-snug">
                  <div className="relative mb-2">
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                    <Link
                      href="https://tunedsphere.com"
                      className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-teal-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Full-Stack Developer at TunedSphere"
                    >
                      Full-Stack Developer · TunedSphere
                    </Link>
                  </div>
                  <div>
                    <p className="mb-4 text-base text-slate-400">
                      Building the live Psygroove platform end to end — music
                      discovery, artist &amp; label pages, festival tracking,
                      and a store for artists. Soft UI, solid product
                      architecture, and the little moments that make people
                      smile.
                    </p>
                    <div className="">
                      <Badge className="mx-1.5 mb-2">React</Badge>
                      <Badge className="mx-1.5 mb-2">Next.js</Badge>
                      <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                      <Badge className="mx-1.5 mb-2">MySQL</Badge>
                      <Badge className="mx-1.5 mb-2">Stripe</Badge>
                      <Badge className="mx-1.5 mb-2">UI/UX</Badge>
                    </div>
                  </div>
                </h3>
              </div>
            </div>
          </li>

          <li className="mb-12">
            <div className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
              <div className="card-pointer-sheen absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg opacity-0 transition-opacity motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:opacity-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                2016 — 2018
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug ">
                  <div className="relative mb-2">
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                    <span className="inline-flex text-xl font-medium text-slate-200">
                      Sound &amp; Light Director
                    </span>
                  </div>
                  <div>
                    <p className="mb-4 text-slate-400">
                      Venue and site prep for large event structures —
                      programming major concerts and shows in Lyon, keeping the
                      room feeling alive.
                    </p>
                  </div>
                </h3>
              </div>
            </div>
          </li>

          <li className="mb-12">
            <div className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
              <div className="card-pointer-sheen absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg opacity-0 transition-opacity motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:opacity-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                2014 — 2015
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug ">
                  <div className="relative mb-2">
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                    <span className="inline-flex text-xl font-medium text-slate-200">
                      Sound, Lighting &amp; Decorations
                    </span>
                  </div>
                  <div>
                    <p className="mb-4 text-slate-400">
                      Technical Director at Arto Theatre and stage manager for
                      nine performing-arts companies — about 12,000 spectators a
                      year, mood set one cue at a time.
                    </p>
                  </div>
                </h3>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div>
        <div className="inline-flex items-center gap-6">
          <div className="group">
            <Link
              href="/pdf/resume.pdf"
              target="_blank"
              className="inline-flex items-center font-bold leading-6 tracking-tight text-cyan-500 underline-offset-4 group-hover:underline"
            >
              View Full Résumé
              <span className="items-center align-middle">
                <Icon
                  name="arrow-up-right"
                  className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold text-cyan-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                ></Icon>
              </span>
            </Link>
          </div>
          <Link
            aria-label="download resume"
            download="resume.pdf"
            href="/pdf/resume.pdf"
            target="_blank"
            className="items-center rounded-sm border p-1 font-bold leading-6 tracking-tight text-cyan-500 hover:bg-slate-900"
          >
            <Icon
              name="download"
              className="h-5 w-5 font-bold text-cyan-500"
            ></Icon>
          </Link>
        </div>
      </div>
    </>
  )
}
