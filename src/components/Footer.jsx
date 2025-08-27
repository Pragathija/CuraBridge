import Brand from './Brand';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuth } from '../context/auth';
import Button from './Button';
import { Bell } from "lucide-react"; // bell icon from lucide-react (install if not already)

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white flex items-center justify-between px-6 py-3 shadow-lg">
      {/* Left: Button */}
      <Link to="/booking">
        <button className="bg-cura-600 text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-cura-700 transition-transform duration-200 transform hover:scale-105">
          Book an Appointment
        </button>
      </Link>

      {/* Right: Notification Bell */}
      <div className="cursor-pointer hover:scale-110 transition">
        <Bell className="text-yellow-500 w-9 h-9" />
      </div>
    </footer>
  );
};

export default Footer;