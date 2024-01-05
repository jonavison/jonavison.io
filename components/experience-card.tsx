import { Badge } from './ui/badge'
import Link from 'next/link'

export default function ExperienceCard({
  dateRange,
  title,
  description,
  skills,
  link,
  ...rest
}) {
  return (
    <li className="mb-12">
      <div
        className="group relative grid cursor-pointer rounded-lg p-1 leading-relaxed text-slate-400 transition-all hover:!opacity-100 hover:group-hover/list:opacity-45 sm:grid-cols-8 sm:gap-8 md:gap-4 "
        {...rest}
      >
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg from-indigo-900/20 to-purple-900/20 transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
          {dateRange}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug ">
            <div className="relative mb-2">
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/80 via-sky-500/70 to-sky-500/0 opacity-0 transition group-hover:opacity-100"></span>
              <Link
                href={link}
                className="group/link decoration- inline-flex text-xl font-medium text-slate-200 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`front-end dev at ${title}`}
              >
                {title}
              </Link>
            </div>
            <div>
              <p className="mb-4 text-slate-400">{description}</p>
              <div className="">
                {skills &&
                  Array.isArray(skills) &&
                  skills.map((skill, index) => (
                    <Badge className="mx-1.5 mb-2" key={index}>
                      {skill}
                    </Badge>
                  ))}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </li>
  )
}
