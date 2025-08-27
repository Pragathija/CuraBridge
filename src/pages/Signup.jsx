import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useAuth } from '../context/auth'
import axios from 'axios'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [role, setRole] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:5000/signup', {name, email, password, role})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen grid place-items-center bg-[url('bgc1.jpg')] bg-cover bg-center from-cura-50 to-white">
      <form onSubmit={onSubmit} className="w-[380px] max-w-full bg-white shadow rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl text-center font-bold text-cura-700">Create your Cura account</h1>
        <label className="block">
          <span className="text-sm text-slate-600">Name</span>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Enter your Name"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Email</span>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your Email"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Password</span>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter your Password"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Confirm Password</span>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your Password"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Select Role</span>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Doctor"
                checked={role === 'Doctor'}
                onChange={e => setRole(e.target.value)}
                required
                className="mr-2 accent-cura-500"
              />
              Doctor
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="Patient"
                checked={role === 'Patient'}
                onChange={e => setRole(e.target.value)}
                required
                className="mr-2 accent-cura-500"
              />
              Patient
            </label>
          </div>
        </label>

        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button className="w-full">Sign up</Button>
        <p className="text-sm text-slate-500">Have an account? <Link to="/login" className="text-cura-700 font-medium">Log in</Link></p>
      </form>
    </div>
  )
}