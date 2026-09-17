import { useState, type FormEvent } from 'react'

const reasons = ['1:1 Life Coaching', 'Business Coaching', 'Book a Keynote', 'Workshop / Retreat', 'Something Else']

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [form, setForm] = useState({ name: '', email: '', reason: reasons[0], message: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`${form.reason} — Inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:hello@forgedfaith.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <div>
      <section className="bg-noise bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-ember-400">Contact</p>
          <h1 className="mt-2 font-display text-5xl tracking-wide text-white sm:text-6xl">
            Let&rsquo;s start the <span className="text-gradient-ember">conversation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Whether you&rsquo;re looking for a coach, a keynote speaker, or a workshop that actually moves the room —
            tell me about it below.
          </p>
        </div>
      </section>

      <section className="bg-ink pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-panel p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-ember-400">Email</p>
              <a href="mailto:hello@forgedfaith.com" className="mt-2 block text-lg font-semibold text-white hover:text-ember-400">
                hello@forgedfaith.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-panel p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-ember-400">Phone</p>
              <a href="tel:+15555550123" className="mt-2 block text-lg font-semibold text-white hover:text-ember-400">
                (555) 555-0123
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-panel p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-ember-400">Booking Window</p>
              <p className="mt-2 text-white/70">
                I book a limited number of speaking engagements each quarter. Reach out at least 8 weeks ahead for
                keynotes and retreats.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-panel p-8 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-white/60">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-white placeholder-white/30 outline-none focus:border-ember-400"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-white/60">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-white placeholder-white/30 outline-none focus:border-ember-400"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wide text-white/60">I&rsquo;m reaching out about</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {reasons.map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setForm({ ...form, reason: r })}
                    className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                      form.reason === r
                        ? 'border-ember-500 bg-ember-500 text-ink'
                        : 'border-white/15 text-white/60 hover:border-white/40'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wide text-white/60">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-ink px-4 py-3 text-white placeholder-white/30 outline-none focus:border-ember-400"
                placeholder="Tell me a bit about what you're looking for..."
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-ember-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ember-400 sm:w-auto"
            >
              Send Message
            </button>

            {status === 'sent' && (
              <p className="mt-4 text-sm font-semibold text-ember-400">
                Your email app should be opening now. Talk soon!
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}
