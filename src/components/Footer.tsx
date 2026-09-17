import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-wider text-white">
            FORGED <span className="text-ember-500">FAITH</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Faith-centered life and business coaching for leaders who are ready to do the inner work that makes the outer work possible.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-ember-400">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/events" className="hover:text-white">Events &amp; Calendar</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-ember-400">Connect</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a href="mailto:hello@forgedfaith.com" className="hover:text-white">hello@forgedfaith.com</a></li>
            <li><a href="tel:+15555550123" className="hover:text-white">(555) 555-0123</a></li>
            <li className="flex gap-4 pt-1">
              <a href="#" aria-label="Instagram" className="hover:text-ember-400">Instagram</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-ember-400">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Forged Faith Coaching. All rights reserved.
      </div>
    </footer>
  )
}
