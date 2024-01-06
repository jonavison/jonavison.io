import Link from 'next/link'
export function AuboutMe() {
  return (
    <>
      <div className="max-w-screen sticky top-0 z-20 -mx-6 mb-6 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-slate-900/20 px-6 py-5 backdrop-blur md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
        <h2 className="text-base font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div>
        <p className="mb-8 text-base leading-relaxed text-slate-400">
          In 2015, I had a dream of making my own Record Label and create a
          website for it. At that time, I tried and it was a mess. Today with
          more knowledge, and excitement, I created{' '}
          <span className="font-semibold text-slate-200">
            <Link href="https://tunedsphere.com">TunedSphere</Link>
          </span>
          , an E-commerce and music platform.
        </p>
        <p className="mb-4 text-base leading-relaxed text-slate-400">
          My self iniciativeness and team spirit makes me fastly adaptive to new
          and dynamic environments. my wife describes me as really funny, super
          intelligent and incredibly handsome (so she said I can not come to
          work in suits, but I promise I will wear a clan hoody). Looking
          forward to meet you and bring the best I can to the team
        </p>
      </div>
    </>
  )
}
