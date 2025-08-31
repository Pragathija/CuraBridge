import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export default function CommonHome() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cura Project</h1>
          <nav className="space-x-6">
            <button
              onClick={() => window.scrollTo(0, 0)}
              className="hover:underline"
            >
              Home
            </button>
            <button
              onClick={() =>
                document.getElementById("partners").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:underline"
            >
              Partners
            </button>
            <button
              onClick={() =>
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:underline"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
            >
              Signup
            </button>
            <button
              onClick={() => navigate("/pharmacy")}
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
            >
              Pharmacy
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center p-10 bg-gradient-to-r from-blue-50 to-blue-100">
          <h2 className="text-4xl font-bold mb-4">Welcome to Cura</h2>
          <p className="text-lg max-w-2xl">
            Cura is a trusted healthcare management system connecting doctors,
            patients, and pharmacies seamlessly. Our mission is to make
            healthcare accessible and reliable for everyone.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="p-10 bg-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Vision & Mission</h3>
          <p className="max-w-3xl mx-auto text-gray-700">
            At Cura, our vision is to revolutionize healthcare by bridging the
            gap between patients, doctors, and hospitals. Our mission is to
            deliver trustworthy, accessible, and affordable healthcare services
            powered by technology.
          </p>
        </section>

        {/* Partners Section */}
        <section id="partners" className="p-10 bg-gray-50">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Our Partner Hospitals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold">CityCare Hospital</h4>
              <p className="text-gray-600">Specialized in Cardiology & Neurology</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold">MediTrust Clinic</h4>
              <p className="text-gray-600">Your family’s health partner</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold">Wellness MultiCare</h4>
              <p className="text-gray-600">Advanced surgical & emergency care</p>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="p-10 bg-white text-center">
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="max-w-3xl mx-auto text-gray-700 mb-6">
            Cura is built on trust, transparency, and innovation. Doctors and
            patients alike rely on us for secure healthcare management. Our
            platform ensures reliable communication and efficient care delivery.
          </p>

          <h4 className="text-xl font-semibold mb-3">Testimonials</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <p className="italic text-gray-600">
                "Cura has transformed the way I connect with my patients. The
                trust and ease of use is unmatched."
              </p>
              <h5 className="mt-3 font-bold">— Dr. Anita Sharma</h5>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <p className="italic text-gray-600">
                "I feel more secure and connected with my doctor through Cura.
                It has made healthcare simpler."
              </p>
              <h5 className="mt-3 font-bold">— Patient Rajesh Kumar</h5>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
          <p>© 2025 Cura Project. All rights reserved.</p>
        </footer>
      </div>
    </AppLayout>
  );
}