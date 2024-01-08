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
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg from-indigo-900/20 to-purple-900/20 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
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
                    aria-label={`front-end dev at TunedSphere`}
                  >
                    <span className="group-hover/link:text-slate-400">
                      E-Commerce Website
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
                    Building a full E-commerce Storefront with products,
                    categories, and subcategories. Seller and customer workflows
                    with subscriptions plans.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">React</Badge>
                    <Badge className="mx-1.5 mb-2">NextJs</Badge>
                    <Badge className="mx-1.5 mb-2">JavaScript</Badge>
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
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg from-indigo-900/20 to-purple-900/20 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
              <Icon name="cd" className="h-8 w-8"></Icon>
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug">
                <div className="relative mb-2">
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
                  <Link
                    href="https://tunedsphere.com/music"
                    className="group/link inline-flex text-xl font-medium text-slate-200 focus-visible:text-cyan-500 group-hover/link:text-slate-400"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`front-end dev at TunedSphere`}
                  >
                    <span className="group-hover/link:text-slate-400">
                      All in One BandCamp & Spotify
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
                    Creating a vibrant music ecosystem catering to the dynamic
                    world of psychedelic trance, uniting artists, record labels,
                    and DJs.
                  </p>
                  <div className="">
                    <Badge className="mx-1.5 mb-2">React</Badge>
                    <Badge className="mx-1.5 mb-2">NextJs</Badge>
                    <Badge className="mx-1.5 mb-2">JavaScript</Badge>
                    <Badge className="mx-1.5 mb-2">TypeScript</Badge>
                    <Badge className="mx-1.5 mb-2">MySql</Badge>
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
                    aria-label={`front-end dev at TunedSphere`}
                  >
                    <span className="group-hover/link:text-slate-400">
                      Modern Markdown
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
                    Blog, Articles, Documentation using markdowns
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
