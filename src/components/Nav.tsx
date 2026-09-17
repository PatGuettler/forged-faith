import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-2xl tracking-wider text-white" onClick={() => setOpen(false)}>
          FORGED <span className="text-ember-500">FAITH</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive ? 'text-ember-400' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-ember-500 px-5 py-2 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ember-400"
          >
            Book Me
          </NavLink>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-white transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-white transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-base font-semibold uppercase tracking-wide ${
                  isActive ? 'bg-white/5 text-ember-400' : 'text-white/70'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ember-500 px-5 py-3 text-center text-base font-bold uppercase tracking-wide text-ink"
          >
            Book Me
          </NavLink>
        </nav>
      )}
    </header>
  )
}
