import Brand from './Brand'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'
import Button from './Button'

export default function Header() {
  const { user, logout } = useAuth()
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Brand />
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-slate-700 hover:text-cura-700">Home</Link>
          <Link to="/dashboard" className="text-slate-700 hover:text-cura-700">Dashboard</Link>
          <Link to="/appointments" className="text-slate-700 hover:text-cura-700">Appointments</Link>
          <Link to="/medications" className="text-slate-700 hover:text-cura-700">Medications</Link>
          <Link to="/alerts" className="text-slate-700 hover:text-cura-700">Alerts</Link>
          {user ? (
            <Button onClick={logout} className="ml-2">Logout</Button>
          ) : (
            <Link to="/login" className="text-cura-700 font-semibold">Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}