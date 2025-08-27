import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/auth'
import Button from '../components/Button'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:5000/login', { email, password })
    .then(result => {
      console.log(result)
      if (result.data.message === 'Login successful') {
        navigate('/')
      } else {
        alert(result.data.message)
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen grid place-items-center bg-[url('bgc1.jpg')] bg-cover bg-center from-cura-50 to-white">
      <form onSubmit={onSubmit} className="w-[380px] max-w-full bg-white shadow rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl text-center font-bold text-cura-700">Welcome to Cura</h1>
        <label className="block">
          <span className="text-sm text-slate-600">Email</span>
          <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)} required placeholder='Enter your Email'/>
        </label>
        <label className="block">
          <span className="text-sm text-slate-600">Password</span>
          <input type="password" className="mt-1 w-full rounded-xl border px-3 py-2" value={password} onChange={e=>setPassword(e.target.value)} required placeholder='Enter your Password'/>
        </label>
        <Button className="w-full">Login</Button>
        <p className="text-sm text-slate-500">No account? <Link to="/signup" className="text-cura-700 font-medium">Sign up</Link></p>
      </form>
    </div>
  )
}