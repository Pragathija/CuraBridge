import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, UserCircle } from "lucide-react"; // icons

export default function DoctorHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth token or session here
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo + Title */}
                <div className="flex items-center gap-2">
                    <img src="../CURA.png" alt="Cura Logo" className="w-8 h-8" />
                    <h1 className="text-xl md:text-2xl font-bold text-cura-700">
                        Cura Doctors
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/doctorhome" className="hover:text-cura-800">
                        Home
                    </Link>
                    <Link to="/" className="hover:text-cura-800">
                        Patients
                    </Link>
                    <Link to="/" className="hover:text-cura-800">
                        Schedules
                    </Link>
                    <Link to="/" className="hover:text-cura-800">
                        Consultants
                    </Link>
                    <Link to="/" className="hover:text-cura-800">
                        Reviews
                    </Link>

                    {/* Profile + Logout */}
                    <button
                        className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100"
                        onClick={() => navigate("/profile")}
                    >
                        <UserCircle size={20} /> <span>Profile</span>
                    </button>
                    <button
                        className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-red-50 text-red-600"
                        onClick={handleLogout}
                    >
                        <LogOut size={20} /> <span>Logout</span>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-sm px-6 py-4 space-y-4">
                    <Link
                        to="/doctorhome"
                        className="block hover:text-cura-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        className="block hover:text-cura-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Patients
                    </Link>
                    <Link
                        to="/"
                        className="block hover:text-cura-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Schedules
                    </Link>
                    <Link
                        to="/"
                        className="block hover:text-cura-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Consultants
                    </Link>
                    <Link
                        to="/"
                        className="block hover:text-cura-800"
                        onClick={() => setIsOpen(false)}
                    >
                        Reviews
                    </Link>

                    {/* Profile + Logout in Mobile Menu */}
                    <button
                        className="flex items-center gap-2 w-full text-left px-2 py-2 rounded-md hover:bg-gray-100"
                        onClick={() => {
                            setIsOpen(false);
                            navigate("/profile");
                        }}
                    >
                        <UserCircle size={20} /> Profile
                    </button>
                    <button
                        className="flex items-center gap-2 w-full text-left px-2 py-2 rounded-md hover:bg-red-50 text-red-600"
                        onClick={handleLogout}
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            )}
        </header>
    );
}
