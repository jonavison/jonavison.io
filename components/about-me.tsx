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
          In 2015 I dreamed of a soft little record label with a home on the
          web. The first try was messy — but the mood stayed. That spark grew
          into{' '}
          <span className="font-semibold text-slate-200">
            <Link href="https://tunedsphere.com">TunedSphere</Link>
          </span>
          : music, artists, festivals, and shop flows that still feel warm and
          human.
        </p>
        <p className="mb-4 text-base leading-relaxed text-slate-400">
          Alongside that, I build Smile, Laugh, and Mood — a local-first media
          ecosystem where music and video stay on your machine, and Mood is the
          optional cloud when you want sync. Soft UI, serious craft, and a
          little room for a smile. According to my wife, I should keep coding —
          preferably in a hoodie and glasses.
        </p>
      </div>
    </>
  )
}
