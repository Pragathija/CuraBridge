import React, { useState, useEffect } from "react";

const HospitalPage = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  const hospitals = [
    {
      id: 1,
      name: "City Care Hospital",
      address: "123 Main Street, Chennai",
      contact: "044-2345678",
      specialization: "Cardiology, Orthopedics",
    },
    {
      id: 2,
      name: "Green Valley Medical Center",
      address: "45 Green Avenue, Bangalore",
      contact: "080-7654321",
      specialization: "Neurology, Pediatrics",
    },
    {
      id: 3,
      name: "Sunrise Health Clinic",
      address: "Mumbai",
      contact: "022-1234567",
      specialization: "Dermatology, ENT",
    },
    {
      id: 4,
      name: "Wellness Hospital",
      address: "Hyderabad",
      contact: "040-9876543",
      specialization: "Gastroenterology, Urology",
    },
    {
      id: 5,
      name: "LifeLine Medical Center",
      address: "Pune",
      contact: "020-7654321",
      specialization: "Psychiatry, Endocrinology",
    },
    {
      id: 6,
      name: "Prime Health Hospital",
      address: "Bangalore",
      contact: "080-1234567",
      specialization: "Nephrology, Ophthalmology",
    },
    {
      id: 7,
      name: "Health Clinic",
      address: "Delhi",
      contact: "011-9876543",
      specialization: "Neurology, Brain Surgery",
    },
    {
      id: 8,
      name: "Care & Cure Hospital",
      address: "Kolkata",
      contact: "033-7654321",
      specialization: "Oncology, Gynecology",
    },
    {
      id: 9,
      name: "Harmony Health Institute",
      address: "Chennai",
      contact: "044-1234567",
      specialization: "Rheumatology, Pulmonology",
    },
    {
      id: 10,
      name: "City Health Center",
      address: "Delhi",
      contact: "011-7654321",
      specialization: "General Medicine, Pediatrics",
    },
  ];

  // Pre-select "City Care Hospital" on component load
  useEffect(() => {
    const cityCareHospital = hospitals.find(
      (hospital) => hospital.name === "City Care Hospital"
    );
    setSelectedHospital(cityCareHospital);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Hospital Profiles</h1>

      {/* Hospital List */}
      {!selectedHospital ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedHospital(hospital)} // Set the clicked hospital as selected
            >
              <h2 className="text-xl font-semibold">{hospital.name}</h2>
              <p>
                <strong>Address:</strong> {hospital.address}
              </p>
              <p>
                <strong>Contact:</strong> {hospital.contact}
              </p>
              <p>
                <strong>Specialization:</strong> {hospital.specialization}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedHospital(null)} // Reset selected hospital
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mb-4"
          >
            Back to Hospital List
          </button>
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{selectedHospital.name}</h2>
            <p>
              <strong>Address:</strong> {selectedHospital.address}
            </p>
            <p>
              <strong>Contact:</strong> {selectedHospital.contact}
            </p>
            <p>
              <strong>Specialization:</strong> {selectedHospital.specialization}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalPage;