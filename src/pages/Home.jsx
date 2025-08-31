import { useNavigate } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import { useEffect, useState } from 'react'

const hospitalsData = [
  { id: 1, name: "City Care Hospital", location: "Chennai", specialties: ["Cardiology", "Orthopedics"] },
  { id: 2, name: "Green Valley Medical Center", location: "Bangalore", specialties: ["Neurology", "Pediatrics"] },
  { id: 3, name: "Sunrise Health Clinic", location: "Mumbai", specialties: ["Dermatology", "ENT"] },
  { id: 4, name: "Health Clinic", location: "Delhi", specialties: ["Neurology", "Brain Surgery"] },
  { id: 5, name: "Wellness Hospital", location: "Hyderabad", specialties: ["Gastroenterology", "Urology"] },
  { id: 6, name: "Care & Cure Hospital", location: "Kolkata", specialties: ["Oncology", "Gynecology"] },
  { id: 7, name: "LifeLine Medical Center", location: "Pune", specialties: ["Psychiatry", "Endocrinology"] },
  { id: 8, name: "Harmony Health Institute", location: "Chennai", specialties: ["Rheumatology", "Pulmonology"] },
  { id: 9, name: "Prime Health Hospital", location: "Bangalore", specialties: ["Nephrology", "Ophthalmology"] },
  { id: 10, name: "City Health Center", location: "Delhi", specialties: ["General Medicine", "Pediatrics"] }
];

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredHospitals = hospitalsData.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id) => {
    navigate(`/hospital/${id}`);
  };

  return (
    <AppLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Select Your Cura 🍀</h1>

        <input
          type="text"
          placeholder="Search hospital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-md w-full mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              onClick={() => handleSelect(hospital.id)}
              className="p-8 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{hospital.name}</h2>
              <p className="text-gray-600">{hospital.location}</p>
              <p className="text-sm text-gray-500">
                Specialties: {hospital.specialties.join(", ")}
              </p>
            </div>

          ))}
        </div>
        <br></br>
        <br></br>
      </div>

    </AppLayout>
  );
};

export default Home;