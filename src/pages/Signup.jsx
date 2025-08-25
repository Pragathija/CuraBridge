import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useAuth } from '../context/auth'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    login({ email, name }, 'demo-token')
    navigate('/')
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-b from-cura-50 to-white">
      <form onSubmit={onSubmit} className="w-[380px] max-w-full bg-white shadow rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-cura-700">Create your Cura account</h1>
        <label className="block">
          <span className="text-sm text-slate-600">Name</span>
          <input className="mt-1 w-full rounded-xl border px-3 py-2" value={name} onChange={e=>setName(e.target.value)} required />
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Email</span>
          <input className="mt-1 w-full rounded-xl border px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} required />
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Password</span>
          <input type="password" className="mt-1 w-full rounded-xl border px-3 py-2" value={password} onChange={e=>setPassword(e.target.value)} required />
        </label>
        <Button className="w-full">Sign up</Button>
        <p className="text-sm text-slate-500">Have an account? <Link to="/login" className="text-cura-700 font-medium">Log in</Link></p>
      </form>
    </div>
  )
}