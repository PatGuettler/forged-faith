import { Link } from 'react-router-dom'

const milestones = [
  { year: '2011', text: 'Left the corner office to start coaching leaders one-on-one, full time.' },
  { year: '2015', text: 'Delivered my first keynote — and realized this was the calling, not the side hustle.' },
  { year: '2019', text: 'Built a coaching framework focused on the inner life of leadership, not just tactics.' },
  { year: '2024', text: 'Spoken on 180+ stages, from Fortune 500 offsites to founder retreats.' },
]

const beliefs = [
  {
    title: 'The inside runs the outside',
    copy: 'Your calendar, your team, your revenue — they are downstream of what is happening in you. We start there.',
  },
  {
    title: 'Honesty over hype',
    copy: 'No recycled frameworks or empty motivation. Just direct, sometimes uncomfortable truth, delivered with care.',
  },
  {
    title: 'Energy is contagious',
    copy: 'A leader who has done the inner work brings a different energy into every room. That energy changes teams.',
  },
]

export default function About() {
  return (
    <div>
      <section className="bg-noise bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-ember-400">About</p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-white sm:text-6xl">
            I help leaders fix what&rsquo;s <span className="text-gradient-ember">actually broken.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            For over a decade I&rsquo;ve coached founders, executives, and teams who look successful on paper but feel
            stuck, reactive, or quietly burned out. Almost every time, the fix isn&rsquo;t a new strategy. It&rsquo;s
            the leader themselves.
          </p>
        </div>
      </section>

      <section className="bg-panel py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">My story</h2>
            <p className="mt-4 text-white/70">
              I spent my first career climbing a corporate ladder that looked great from the outside and felt empty
              from the inside. The breaking point wasn&rsquo;t a failure — it was a promotion I got that I knew,
              deep down, I wasn&rsquo;t the person I wanted to be to hold.
            </p>
            <p className="mt-4 text-white/70">
              That&rsquo;s when I started doing the inner work most leadership development skips entirely. The
              results showed up everywhere: in my relationships, my decisions, and eventually my business. Now I
              help other leaders find that same shift — faster, and without having to hit their own breaking point
              first.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-ember-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ember-400"
            >
              Work With Me
            </Link>
          </div>

          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-5 border-l-2 border-ember-500/40 pl-5">
                <div className="font-display text-2xl text-ember-400">{m.year}</div>
                <p className="text-sm text-white/70">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            What I <span className="text-gradient-ember">believe.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beliefs.map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-panel-2 p-8">
                <h3 className="font-display text-2xl tracking-wide text-white">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ember-500 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-3xl leading-tight tracking-wide text-ink sm:text-4xl">
            Ready to find out what&rsquo;s really running the show?
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
