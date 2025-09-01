import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function CommonHome() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-200 text-cura-700">

        {/* Header */}
        <header className="bg-cura-600 text-white p-4 shadow-md flex justify-center">
          <h1 className="text-3xl font-extrabold tracking-wide animate-pulse">Cura Project</h1>
        </header>

        {/* Hero Section with Hospitals Button */}
        <section className="flex-1 flex flex-col justify-center items-center text-center p-10 bg-gradient-to-r from-green-50 to-green-100">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Welcome to Cura</h2>
          <p className="text-lg max-w-2xl mb-6">
            Cura connects doctors, patients, and pharmacies with seamless, secure healthcare experiences.
            Accessible. Reliable. For everyone.
          </p>
          <button
            onClick={() => navigate('/home')} // Navigate to Hospitals page
            className="bg-cura-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Hospitals
          </button>
        </section>

        {/* Vision & Mission */}
        <section className="p-10 bg-white text-center text-green-700">
          <h3 className="text-2xl font-semibold mb-4">Our Vision & Mission</h3>
          <p className="max-w-3xl mx-auto">
            We bridge gaps between patients and providers. Trust, accessibility, and technology-driven care.
          </p>
        </section>

        {/* Partners Grid with Hospitals */}
        <section id="partners" className="p-10 bg-green-50">
          <h3 className="text-2xl font-semibold text-center mb-6">Our Partner Hospitals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["CityCare Hospital", "MediTrust Clinic", "Wellness MultiCare"].map((name, idx) => (
              <div key={name} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <img src={`https://placehold.co/80x80?text=${name}`} alt="Hospital Logo" className="mx-auto mb-3 rounded-full shadow" />
                <h4 className="font-bold mb-2">{name}</h4>
                <p className="text-sm text-gray-500">
                  {idx === 0 && "Specialized in Cardiology & Neurology"}
                  {idx === 1 && "Your family’s health partner"}
                  {idx === 2 && "Advanced surgical & emergency care"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About & Testimonials Section */}
        <section id="about" className="p-10 bg-white text-center text-green-700">
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="max-w-3xl mx-auto mb-6">
            Built with trust, transparency, and innovation. Doctors and patients rely on Cura for secure healthcare management and communication.
          </p>
          <h4 className="text-xl font-semibold mb-3">Testimonials</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-green-50 rounded-lg shadow flex items-center space-x-4">
              <img src="https://placehold.co/48x48?text=A" alt="Dr Anita Sharma" className="rounded-full" />
              <div>
                <p className="italic mb-1">"Cura has transformed the way I connect with my patients. Trust and ease of use is unmatched."</p>
                <div className="flex items-center">
                  <span className="font-bold">— Dr. Anita Sharma</span>
                  <span className="ml-2 text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow flex items-center space-x-4">
              <img src="https://placehold.co/48x48?text=R" alt="Rajesh Kumar" className="rounded-full" />
              <div>
                <p className="italic mb-1">"I feel secure and connected. Cura has made healthcare simpler."</p>
                <div className="flex items-center">
                  <span className="font-bold">— Patient Rajesh Kumar</span>
                  <span className="ml-2 text-yellow-500">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developers Section */}
        <section className="p-10 bg-green-50 text-center text-green-700">
          <h3 className="text-2xl font-semibold mb-4">App Developers</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
            {["Pragathija", "Sathiya", "Bala Nithya", "Barath Kumar"].map(name => (
              <div key={name} className="bg-white p-4 rounded-lg shadow text-center">
                <img src={`https://placehold.co/64x64?text=${name}`} alt={name} className="mx-auto mb-2 rounded-full border-2 border-green-200" />
                <span className="font-bold block mb-1">{name}</span>
                <a href="#" className="text-green-600 text-xs hover:underline">Visit Profile</a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-cura-600 text-white text-center p-4 mt-auto flex flex-col items-center space-y-2">
          <p>© 2025 Cura Project. All rights reserved.</p>
          <div>
            <a href="#" className="mx-2 hover:text-green-300">Facebook</a>
            <a href="#" className="mx-2 hover:text-green-300">Twitter</a>
            <a href="#" className="mx-2 hover:text-green-300">Support</a>
          </div>
        </footer>
      </div>
    </AppLayout>
  );
}
