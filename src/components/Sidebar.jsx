import { Link, useLocation } from 'react-router-dom'
import { HeartPulse, CalendarClock, Pill, BellRing, FileText, Settings } from 'lucide-react'

const items = [
  { to: '/', label: 'Dashboard', icon: HeartPulse },
  { to: '/appointments', label: 'Appointments', icon: CalendarClock },
  { to: '/medications', label: 'Medications', icon: Pill },
  { to: '/alerts', label: 'Alerts', icon: BellRing },
  { to: '/records', label: 'Records', icon: FileText },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  const { pathname } = useLocation()
  return (
    <aside className="w-64 hidden md:block">
      <div className="sticky top-20 space-y-1 p-2">
        {items.map(({ to, label, icon:Icon }) => (
          <Link key={to} to={to}
            className={'flex items-center gap-3 rounded-xl px-3 py-2 text-sm ' + (pathname === to ? 'bg-cura-50 text-cura-700' : 'hover:bg-slate-100')}>
            <Icon size={18} /> {label}
          </Link>
        ))}
      </div>
    </aside>
  )
}