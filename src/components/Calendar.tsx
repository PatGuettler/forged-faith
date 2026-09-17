import { useMemo, useState } from 'react'
import type { SpeakingEvent } from '../data/events'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function toKey(date: Date) {
  return date.toISOString().slice(0, 10)
}

type Props = {
  events: SpeakingEvent[]
  selectedId: string | null
  onSelectEvent: (id: string) => void
}

export default function Calendar({ events, selectedId, onSelectEvent }: Props) {
  const initialMonth = events.length ? new Date(events[0].date + 'T00:00:00') : new Date()
  const [cursor, setCursor] = useState(new Date(initialMonth.getFullYear(), initialMonth.getMonth(), 1))

  const eventsByDate = useMemo(() => {
    const map = new Map<string, SpeakingEvent[]>()
    for (const ev of events) {
      const key = ev.date
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(ev)
    }
    return map
  }, [events])

  const year = cursor.getFullYear()
  const month = cursor.getMonth()
  const firstOfMonth = new Date(year, month, 1)
  const startWeekday = firstOfMonth.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (Date | null)[] = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))

  const monthLabel = cursor.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
  const today = toKey(new Date())

  return (
    <div className="rounded-2xl border border-white/10 bg-panel p-6 md:p-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCursor(new Date(year, month - 1, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-ember-400 hover:text-ember-400"
          aria-label="Previous month"
        >
          ‹
        </button>
        <h3 className="font-display text-2xl tracking-wide text-white">{monthLabel}</h3>
        <button
          onClick={() => setCursor(new Date(year, month + 1, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-ember-400 hover:text-ember-400"
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs font-bold uppercase tracking-wide text-white/40">
        {WEEKDAYS.map((w) => (
          <div key={w}>{w}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />
          const key = toKey(date)
          const dayEvents = eventsByDate.get(key) ?? []
          const hasEvent = dayEvents.length > 0
          const isSelected = hasEvent && dayEvents.some((e) => e.id === selectedId)
          const isToday = key === today

          return (
            <button
              key={key}
              onClick={() => hasEvent && onSelectEvent(dayEvents[0].id)}
              disabled={!hasEvent}
              className={`relative aspect-square rounded-lg text-sm transition-colors ${
                hasEvent
                  ? isSelected
                    ? 'bg-ember-500 font-bold text-ink'
                    : 'bg-ember-500/15 font-semibold text-ember-300 hover:bg-ember-500/30'
                  : 'text-white/30'
              } ${isToday && !hasEvent ? 'ring-1 ring-white/30' : ''}`}
            >
              {date.getDate()}
              {hasEvent && !isSelected && (
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ember-400" />
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
        <span className="h-2 w-2 rounded-full bg-ember-500/40" />
        Speaking date — tap to view details
      </div>
    </div>
  )
}
