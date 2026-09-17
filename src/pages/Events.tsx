import { useState } from 'react'
import { Link } from 'react-router-dom'
import { events } from '../data/events'
import Calendar from '../components/Calendar'

const typeColors: Record<string, string> = {
  Keynote: 'bg-ember-500/15 text-ember-300 border-ember-500/30',
  Workshop: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  Retreat: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  Virtual: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
}

export default function Events() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date))
  const [selectedId, setSelectedId] = useState<string | null>(sorted[0]?.id ?? null)

  return (
    <div>
      <section className="bg-noise bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-ember-400">Events</p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-white sm:text-6xl">
            Catch me <span className="text-gradient-ember">live.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Keynotes, workshops, and retreats where the energy is high and the work is real. Find where I&rsquo;m
            speaking next and grab your seat.
          </p>
        </div>
      </section>

      <section className="bg-ink pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          <Calendar events={sorted} selectedId={selectedId} onSelectEvent={setSelectedId} />

          <div className="space-y-4">
            {sorted.map((ev) => {
              const isSelected = ev.id === selectedId
              return (
                <button
                  key={ev.id}
                  onClick={() => setSelectedId(ev.id)}
                  className={`block w-full rounded-2xl border p-6 text-left transition-colors ${
                    isSelected ? 'border-ember-500 bg-panel-2' : 'border-white/10 bg-panel hover:border-white/25'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${typeColors[ev.type]}`}>
                      {ev.type}
                    </span>
                    <span className="text-sm font-semibold text-white/60">
                      {new Date(ev.date + 'T00:00:00').toLocaleDateString(undefined, {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}{' '}
                      · {ev.time}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl tracking-wide text-white">{ev.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-ember-400">
                    {ev.venue} · {ev.city}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{ev.description}</p>

                  {ev.ticketUrl && (
                    <span className="mt-4 inline-block rounded-full bg-ember-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-ink">
                      Reserve Your Seat
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-panel py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
            Want me on <span className="text-gradient-ember">your stage?</span>
          </h2>
          <p className="mt-4 text-white/60">
            I book a limited number of keynotes and workshops each quarter. Reach out early to lock in your date.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-ember-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ember-400"
          >
            Inquire About Booking
          </Link>
        </div>
      </section>
    </div>
  )
}
