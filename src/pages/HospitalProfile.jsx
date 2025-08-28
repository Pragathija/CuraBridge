import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
