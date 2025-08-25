import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const hospitalsData = [
  { id: 1, name: "City Care Hospital", location: "Chennai", description: "Best in cardiology and orthopedics care." },
  { id: 2, name: "Green Valley Medical Center", location: "Bangalore", description: "Specialized in neurology and pediatrics." },
  { id: 3, name: "Sunrise Health Clinic", location: "Mumbai", description: "Focused on dermatology and ENT treatments." },
];

const HospitalProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospital = hospitalsData.find(h => h.id === parseInt(id));

  if (!hospital) return <p>Hospital not found.</p>;

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{hospital.name}</h1>
      <p className="text-lg text-gray-600">{hospital.location}</p>
      <p className="mt-4">{hospital.description}</p>
    </div>
  );
};

export default HospitalProfile;
