import { Link } from 'react-router-dom'
import { events } from '../data/events'

const stats = [
  { label: 'Leaders Coached', value: '2,400+' },
  { label: 'Stages Worldwide', value: '180+' },
  { label: 'Years in the Arena', value: '15' },
]

const pillars = [
  {
    title: 'Life Coaching',
    copy: 'Clear the internal noise — the doubt, the old stories, the burnout — so the person leading your life is actually the one you want in charge.',
  },
  {
    title: 'Business Coaching',
    copy: 'Strategy is easy to copy. What separates the leaders who scale is what happens in their head when the pressure is on.',
  },
  {
    title: 'Keynote Speaking',
    copy: 'High-energy, no-fluff talks that leave rooms fired up and leadership teams actually changed, not just entertained.',
  },
]

export default function Home() {
  const nextEvent = events[0]

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-noise bg-ink">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-ember-500/30 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-ember-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-32 md:pt-24">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-ember-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ember-300">
            Life &amp; Business Coaching · Keynote Speaking
          </p>

          <h1 className="font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-gradient-ember">Leadership problems</span>
            <br />
            aren&rsquo;t always
            <br />
            leadership-skill problems.
          </h1>

          <p className="mt-6 max-w-2xl font-display text-2xl tracking-wide text-white/90 sm:text-3xl">
            Sometimes the real issue is what is happening{' '}
            <span className="text-ember-400">inside the leader.</span>
          </p>

          <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
            I help founders, executives, and teams do the inner work behind the outer results — through coaching that
            gets honest and keynotes that get rooms on fire.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-ember-500 px-8 py-4 text-center text-base font-bold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember-400"
            >
              Book a Discovery Call
            </Link>
            <Link
              to="/events"
              className="rounded-full border-2 border-white/20 px-8 py-4 text-center text-base font-bold uppercase tracking-wide text-white transition-colors hover:border-ember-400 hover:text-ember-400"
            >
              See Where I'm Speaking
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-ember-400 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/50 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Spotlight */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-ember-400">Watch</p>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
            From the <span className="text-gradient-ember">stage.</span>
          </h2>
          <p className="mt-3 max-w-xl text-white/60">
            A glimpse of the energy in the room. More talks live on my YouTube channel.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-[0_0_60px_-15px_rgba(251,122,26,0.35)]">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/rvz4dabTc9A"
                title="God Will Raise You Up — placeholder speaking clip"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs uppercase tracking-wide text-white/30">
            Placeholder clip — swap in your own talks from YouTube
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-panel py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            Three ways we go to <span className="text-gradient-ember">work.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-white/10 bg-panel-2 p-8 transition-colors hover:border-ember-500/50"
              >
                <div className="mb-5 h-1 w-10 rounded-full bg-ember-500 transition-all group-hover:w-16" />
                <h3 className="font-display text-2xl tracking-wide text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big quote repeat / manifesto */}
      <section className="relative overflow-hidden bg-ember-500 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-5xl">
            &ldquo;You don&rsquo;t need another framework. You need to face what&rsquo;s actually running the show.&rdquo;
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-ink/70">
            This is the work we do together.
          </p>
        </div>
      </section>

      {/* Next event teaser */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-panel p-8 sm:flex-row sm:items-center md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ember-400">Next Up</p>
              <h3 className="mt-2 font-display text-3xl tracking-wide text-white">{nextEvent.title}</h3>
              <p className="mt-2 text-white/60">
                {new Date(nextEvent.date + 'T00:00:00').toLocaleDateString(undefined, {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
                · {nextEvent.city}
              </p>
            </div>
            <Link
              to="/events"
              className="shrink-0 rounded-full bg-ember-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ember-400"
            >
              Full Calendar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
