export type SpeakingEvent = {
  id: string
  title: string
  date: string // ISO date, e.g. "2026-10-14"
  time: string
  city: string
  venue: string
  type: 'Keynote' | 'Workshop' | 'Retreat' | 'Virtual'
  description: string
  ticketUrl?: string
}

export const events: SpeakingEvent[] = [
  {
    id: 'forged-leadership-summit',
    title: 'Forged Leadership Summit',
    date: '2026-10-14',
    time: '9:00 AM CST',
    city: 'Austin, TX',
    venue: 'The Fairmont Austin',
    type: 'Keynote',
    description:
      'A full-day keynote experience on leading from the inside out — for executives ready to close the gap between who they are and how they lead.',
    ticketUrl: '#',
  },
  {
    id: 'inner-work-outer-impact',
    title: 'Inner Work, Outer Impact — Virtual Masterclass',
    date: '2026-10-29',
    time: '12:00 PM EST',
    city: 'Online',
    venue: 'Live Webinar',
    type: 'Virtual',
    description:
      'A 90-minute deep dive into the internal patterns that quietly shape team culture, decision-making, and burnout.',
    ticketUrl: '#',
  },
  {
    id: 'founders-fire-retreat',
    title: "Founder's Fire Retreat",
    date: '2026-11-12',
    time: '8:00 AM MST',
    city: 'Sedona, AZ',
    venue: 'Mii amo Retreat',
    type: 'Retreat',
    description:
      'A three-day immersive retreat for founders and business owners rebuilding their leadership from a place of clarity, not exhaustion.',
    ticketUrl: '#',
  },
  {
    id: 'scale-yourself-workshop',
    title: 'Scale Yourself Before You Scale Your Business',
    date: '2026-11-21',
    time: '10:00 AM CST',
    city: 'Dallas, TX',
    venue: 'Dallas Convention Center',
    type: 'Workshop',
    description:
      'A hands-on workshop for growth-stage entrepreneurs on the mindset shifts required to lead a bigger company than the one you started.',
    ticketUrl: '#',
  },
  {
    id: 'new-year-new-leader',
    title: 'New Year, New Leader',
    date: '2027-01-09',
    time: '9:00 AM PST',
    city: 'Los Angeles, CA',
    venue: 'The Broad Stage',
    type: 'Keynote',
    description:
      'Kick off the year with a keynote built to challenge every leader in the room to look inward before setting outward goals.',
    ticketUrl: '#',
  },
]
