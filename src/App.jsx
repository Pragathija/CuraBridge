import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Medications from './pages/Medications';
import Alerts from './pages/Alerts';
import Records from './pages/Records';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuth } from './context/auth';
import Home from './pages/Home';
import HospitalProfile from './pages/HospitalProfile';
import Booking from './pages/Booking';
import CommonHome from './pages/CommonHome'; // Import CommonHome

function Private({ children }) {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Private><Home /></Private>} />
      <Route path="/hospital/:id" element={<Private><HospitalProfile /></Private>} />
      <Route path="/common-home" element={<CommonHome />} /> {/* Add route for CommonHome */}

      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
      <Route path="/appointments" element={<Private><Appointments /></Private>} />
      <Route path="/medications" element={<Private><Medications /></Private>} />
      <Route path="/alerts" element={<Private><Alerts /></Private>} />
      <Route path="/records" element={<Private><Records /></Private>} />
      <Route path="/settings" element={<Private><Settings /></Private>} />
      <Route path="/booking" element={<Booking />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}