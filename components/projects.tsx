import Link from 'next/link'
import { Icon } from './icon'
import { Badge } from './ui/badge'

export function Projects() {
  return (
    <>
      <div className="max-w-screen sticky top-0 z-20 -mx-6 mb-6 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-slate-900/20 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
        <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <ol className="group/list">
        <li className="mb-12">
          <div className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 ">
            <div className="card-pointer-sheen absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg opacity-0 transition-opacity motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:opacity-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
              <Icon name="backpack" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://backpicker.netlify.app/"
                    className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="BackPicker hiking pack composer"
                  >
                    <span className="group-hover/link:text-slate-400">
                      BackPicker
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    Pack smarter — compose hiking gear and see weight and volume
                    like a DaisyDisk sunburst, with a shared catalog and personal
                    gear library.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">Next.js</Badge>
                    <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                    <Badge className="mx-1.5 mb-2">Neon</Badge>
                    <Badge className="mx-1.5 mb-2">Clerk</Badge>
                    <Badge className="mx-1.5 mb-2">Drizzle</Badge>
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
              <Icon name="squirrel" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://squirrel-ai.vercel.app/"
                    className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Squirrel AI chat workspace"
                  >
                    <span className="group-hover/link:text-slate-400">
                      Squirrel AI
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    An AI chat workspace — threads, pins, a library view, and
                    conversation export to PDF and slides when the talk needs to
                    leave the room.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">Next.js</Badge>
                    <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                    <Badge className="mx-1.5 mb-2">AI SDK</Badge>
                    <Badge className="mx-1.5 mb-2">Clerk</Badge>
                    <Badge className="mx-1.5 mb-2">Upstash</Badge>
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
              <Icon name="cd" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://avison-soft.com/smile"
                    className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Smile music app"
                  >
                    <span className="group-hover/link:text-slate-400">
                      Smile
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    Local-first macOS music player — tags, metadata, EQ, and soft
                    themes. Optional Mood sync when you want the library
                    elsewhere.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">Swift</Badge>
                    <Badge className="mx-1.5 mb-2">macOS</Badge>
                    <Badge className="mx-1.5 mb-2">GRDB</Badge>
                    <Badge className="mx-1.5 mb-2">Sparkle</Badge>
                    <Badge className="mx-1.5 mb-2">EQ</Badge>
                    <Badge className="mx-1.5 mb-2">Privacy</Badge>
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
              <Icon name="video" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://avison-soft.com/laugh"
                    className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Laugh video app"
                  >
                    <span className="group-hover/link:text-slate-400">
                      Laugh
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    Local-first video player — smart library, cinematic
                    playback, wide formats. Privacy-first; Mood for media sync
                    later.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">Swift</Badge>
                    <Badge className="mx-1.5 mb-2">macOS</Badge>
                    <Badge className="mx-1.5 mb-2">mpv</Badge>
                    <Badge className="mx-1.5 mb-2">GRDB</Badge>
                    <Badge className="mx-1.5 mb-2">AVFoundation</Badge>
                    <Badge className="mx-1.5 mb-2">Privacy</Badge>
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
              <Icon name="cloud" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://avison-soft.com/mood-cloud"
                    className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Mood cloud sync"
                  >
                    <span className="group-hover/link:text-slate-400">
                      Mood
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    Shared sync for Smile &amp; Laugh — one vault, predictable
                    tiers, local-first until you choose the cloud.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">Hono</Badge>
                    <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                    <Badge className="mx-1.5 mb-2">Postgres</Badge>
                    <Badge className="mx-1.5 mb-2">B2</Badge>
                    <Badge className="mx-1.5 mb-2">Stripe</Badge>
                    <Badge className="mx-1.5 mb-2">JWT</Badge>
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
              <Icon name="credit-card" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://tunedsphere.com/shop"
                    className="group/link decoration- inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="TunedSphere shop"
                  >
                    <span className="group-hover/link:text-slate-400">
                      TunedSphere Shop
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    A storefront for artists — products, categories,
                    subscriptions, and payments — kept clear so the music still
                    feels like the main character.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">React</Badge>
                    <Badge className="mx-1.5 mb-2">Next.js</Badge>
                    <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                    <Badge className="mx-1.5 mb-2">Zod</Badge>
                    <Badge className="mx-1.5 mb-2">Clerk</Badge>
                    <Badge className="mx-1.5 mb-2">Stripe</Badge>
                    <Badge className="mx-1.5 mb-2">Resend</Badge>
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
              <Icon name="cd" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://music.tunedsphere.com"
                    className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-500 group-hover/link:text-slate-400"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="TunedSphere music platform"
                  >
                    <span className="group-hover/link:text-slate-400">
                      TunedSphere Music
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    Artists, albums, labels, DJs, and festival tracking — a
                    listening home with mood and genre paths, still growing.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">React</Badge>
                    <Badge className="mx-1.5 mb-2">Next.js</Badge>
                    <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                    <Badge className="mx-1.5 mb-2">MySQL</Badge>
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
              <Icon name="book" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://tunedsphere.com/docs"
                    className="group/link decoration- inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-300"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="TunedSphere docs"
                  >
                    <span className="group-hover/link:text-slate-400">
                      Docs &amp; Stories
                    </span>
                    <span className="items-center align-middle">
                      <Icon
                        name="arrow-up-right"
                        className="ml-1 h-4 w-4 shrink-0 translate-y-px font-bold transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-slate-400 motion-reduce:transition-none"
                      ></Icon>
                    </span>
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-base text-slate-400">
                    Blog, articles, and documentation in markdown — clear words
                    for a soft product.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">MDX</Badge>
                    <Badge className="mx-1.5 mb-2">Contentlayer</Badge>
                    <Badge className="mx-1.5 mb-2">JSON</Badge>
                  </div>
                </div>
              </h3>
            </div>
          </div>
        </li>
      </ol>
    </>
  )
}
