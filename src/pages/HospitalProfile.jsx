import React, { useState, useEffect } from "react";

const HospitalPage = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [isNewPatient, setIsNewPatient] = useState(false);
  const [isOldPatient, setIsOldPatient] = useState(false);
  const [oldPatientId, setOldPatientId] = useState("");
  const [patients, setPatients] = useState({}); // store patients per hospital
  const [lastGeneratedId, setLastGeneratedId] = useState(""); // show new ID

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
  ];

  // Pre-select "City Care Hospital" on load
  useEffect(() => {
    const cityCareHospital = hospitals.find(
      (hospital) => hospital.name === "City Care Hospital"
    );
    setSelectedHospital(cityCareHospital);
  }, []);

  // Generate a random patient ID (like P12345)
  const generatePatientId = () => {
    return "P" + Math.floor(10000 + Math.random() * 90000);
  };

  // Handle New Patient Registration
  const handleNewPatientSubmit = (e) => {
    e.preventDefault();
    const newId = generatePatientId();

    setPatients((prev) => ({
      ...prev,
      [selectedHospital.id]: [
        ...(prev[selectedHospital.id] || []),
        { id: newId },
      ],
    }));

    setLastGeneratedId(newId);
    setIsNewPatient(false);
  };

  // Handle Old Patient Login
  const handleOldPatientSubmit = (e) => {
    e.preventDefault();
    const hospitalPatients = patients[selectedHospital.id] || [];
    const exists = hospitalPatients.find((p) => p.id === oldPatientId);

    if (exists) {
      alert(
        `Welcome back to ${selectedHospital.name}.\nYour Patient ID: ${oldPatientId}`
      );
    } else {
      alert(
        `Patient ID ${oldPatientId} not found at ${selectedHospital.name}`
      );
    }

    setOldPatientId("");
    setIsOldPatient(false);
  };

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
              onClick={() => setSelectedHospital(hospital)}
            >
              <h2 className="text-xl font-semibold">{hospital.name}</h2>
              <p><strong>Address:</strong> {hospital.address}</p>
              <p><strong>Contact:</strong> {hospital.contact}</p>
              <p><strong>Specialization:</strong> {hospital.specialization}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* Back button */}
          <button
            onClick={() => setSelectedHospital(null)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mb-4"
          >
            Back to Hospital List
          </button>

          {/* Hospital details */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{selectedHospital.name}</h2>
            <p><strong>Address:</strong> {selectedHospital.address}</p>
            <p><strong>Contact:</strong> {selectedHospital.contact}</p>
            <p><strong>Specialization:</strong> {selectedHospital.specialization}</p>
          </div>

          {/* Patient buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => {
                setIsNewPatient(true);
                setIsOldPatient(false);
                setLastGeneratedId(""); // reset ID display
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              New Patient
            </button>
            <button
              onClick={() => {
                setIsOldPatient(true);
                setIsNewPatient(false);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Old Patient
            </button>
          </div>

          {/* New Patient Form */}
          {isNewPatient && (
            <form
              onSubmit={handleNewPatientSubmit}
              className="mt-6 border p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">New Patient Registration</h2>
              <p className="mb-4">Click Submit to generate a new Patient ID</p>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Generate ID
              </button>
            </form>
          )}

          {/* Old Patient Form */}
          {isOldPatient && (
            <form
              onSubmit={handleOldPatientSubmit}
              className="mt-6 border p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Old Patient Login</h2>
              <input
                type="text"
                placeholder="Enter Patient ID"
                className="w-full p-2 border mb-2 rounded"
                value={oldPatientId}
                onChange={(e) => setOldPatientId(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          )}

          {/* Show generated Patient ID */}
          {lastGeneratedId && (
            <div className="mt-6 border p-4 rounded-lg shadow bg-gray-100">
              <h3 className="text-lg font-semibold">Patient Registered</h3>
              <p>Your Patient ID: <strong>{lastGeneratedId}</strong></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HospitalPage;
