<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import Button from "./Button";
import Brand from "./Brand";

export default function Header() {
  const { user, logout } = useAuth();
=======
import { useState } from 'react'
import Brand from './Brand'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'
import Button from './Button'
import ProfileButton from './ProfileButton'
import { Menu, X } from 'lucide-react' // for hamburger icons

export default function Header() {
  const { user, logout, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  // Update user profile in context
  function handleProfileUpdate(profile) {
    setUser && setUser({ ...user, ...profile });
  }
>>>>>>> 6d87daa34755e29f5aa2341355727c62c7e38e40

  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Brand / Logo */}
        <Brand />
<<<<<<< HEAD
        <nav className="flex items-center gap-4">
          {/* ✅ Common Home renamed as Home */}
          <Link
            to="/common-home"
            className="text-slate-700 hover:text-cura-700"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-slate-700 hover:text-cura-700"
          >
            Dashboard
          </Link>
          <Link
            to="/appointments"
            className="text-slate-700 hover:text-cura-700"
          >
            Appointments
          </Link>
          <Link
            to="/medications"
            className="text-slate-700 hover:text-cura-700"
          >
            Medications
          </Link>
          <Link
            to="/alerts"
            className="text-slate-700 hover:text-cura-700"
          >
            Alerts
          </Link>
          {user ? (
            <Button onClick={logout} className="ml-2">
              Logout
            </Button>
=======

        {/* Hamburger Menu for small screens */}
        <button
          className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/home" className="text-slate-700 hover:text-cura-700">Home</Link>
          <Link to="/dashboard" className="text-slate-700 hover:text-cura-700">Dashboard</Link>
          <Link to="/appointments" className="text-slate-700 hover:text-cura-700">Appointments</Link>
          <Link to="/medications" className="text-slate-700 hover:text-cura-700">Medications</Link>
          <Link to="/alerts" className="text-slate-700 hover:text-cura-700">Alerts</Link>

          {user ? (
            <>
              <Button onClick={logout} className="ml-2">Logout</Button>
              <ProfileButton user={user} onUpdate={handleProfileUpdate} />
            </>
>>>>>>> 6d87daa34755e29f5aa2341355727c62c7e38e40
          ) : (
            <Link to="/login" className="text-cura-700 font-semibold">
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col items-start px-4 py-4 gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-cura-700">Home</Link>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-cura-700">Dashboard</Link>
            <Link to="/appointments" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-cura-700">Appointments</Link>
            <Link to="/medications" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-cura-700">Medications</Link>
            <Link to="/alerts" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-cura-700">Alerts</Link>

            {user ? (
              <>
                <Button onClick={() => { logout(); setMenuOpen(false); }}>Logout</Button>
                <ProfileButton user={user} onUpdate={handleProfileUpdate} />
              </>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="text-cura-700 font-semibold">Login</Link>
            )}
          </nav>
        </div>
      )}
    </header>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 6d87daa34755e29f5aa2341355727c62c7e38e40
}
