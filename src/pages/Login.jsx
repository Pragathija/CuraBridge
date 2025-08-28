import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/auth'
import Button from '../components/Button'
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  OAuthProvider 
} from "firebase/auth";
import { auth } from "./firebase";



export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  // 🔹 Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      login({ email: user.email }, token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      login({ email: user.email }, token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 Facebook Login
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      login({ email: user.email, name: user.displayName }, token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  // 🔹 Microsoft Login
  const handleMicrosoftLogin = async () => {
    const provider = new OAuthProvider('microsoft.com');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      login({ email: user.email, name: user.displayName }, token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[url('bgc1.jpg')] bg-cover bg-center">
      <form onSubmit={handleEmailLogin} className="w-[380px] max-w-full bg-white shadow rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-cura-700">Welcome to Cura</h1>

        {/* Email & Password Inputs */}
        <label className="block">
          <span className="text-sm text-slate-600">Email</span>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
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
            placeholder="Enter your password"
          />
        </label>

        {/* Login Button */}
        <Button type="submit" className="w-full">Login</Button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Logins */}
        <Button onClick={handleGoogleLogin} className="w-full bg-cura-600 hover:bg-cura-700 text-white">Login with Google</Button>
        <Button onClick={handleFacebookLogin} className="w-full bg-cura-600 hover:bg-cura-700 text-white">Login with Facebook</Button>
        <Button onClick={handleMicrosoftLogin} className="w-full bg-cura-600 hover:bg-cura-700 text-white">Login with Microsoft</Button>

        {/* Signup Link */}
        <p className="text-sm text-slate-500 text-center mt-4">
          No account? <Link to="/signup" className="text-cura-700 font-medium">Sign up</Link>
        </p>
      </form>
    </div>
  )
}
