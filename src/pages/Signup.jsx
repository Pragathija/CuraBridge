import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useAuth } from '../context/auth'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth"

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('patient')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const token = await user.getIdToken()
      login({ email: user.email, role }, token)
      navigate("/selectrole");
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken()
      login({ email: user.email }, token);
      navigate("/selectrole");
    } catch (err) {
      alert(err.message);
    }
  }

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken()
      login({ email: user.email, name: user.displayName }, token);
      navigate('/selectrole');
    } catch (error) {
      console.error(error);
    }
  }

  const handleMicrosoftLogin = async () => {
    const provider = new OAuthProvider('microsoft.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken()
      login({ email: user.email, name: user.displayName }, token);
      navigate('/selectrole');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-[url('bgc1.jpg')] bg-cover bg-center">
      <form onSubmit={handleSignup} className="w-[380px] max-w-full bg-white shadow rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl text-center font-bold text-cura-700">Create your Cura account</h1>

        <label className="block">
          <span className="text-sm text-slate-600">Email</span>
          <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter your Email"/>
        </label>

        <label className="block">
          <span className="text-sm text-slate-600">Password</span>
          <input type="password" className="mt-1 w-full rounded-xl border px-3 py-2" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Enter your Password"/>
        </label>

        <label className="block">
          <span className="text-sm text-slate-600">Confirm Password</span>
          <input type="password" className="mt-1 w-full rounded-xl border px-3 py-2" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required placeholder="Confirm your Password"/>
        </label>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button type="submit" className="w-full">Sign up</Button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <Button type="button" onClick={handleGoogleSignup} className="w-full bg-cura-600 hover:bg-cura-700 text-white">Sign up with Google</Button>
        <Button type="button" onClick={handleFacebookLogin} className="w-full bg-cura-600 hover:bg-cura-700 text-white">Sign up with Facebook</Button>
        <Button type="button" onClick={handleMicrosoftLogin} className="w-full bg-cura-600 hover:bg-cura-700 text-white">Sign up with Microsoft</Button>

        <p className="text-sm text-slate-500">Already have an account? <Link to="/login" className="text-cura-700 font-medium">Log in</Link></p>
      </form>
    </div>
  )
}
