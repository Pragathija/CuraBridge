import React, { useState } from "react";

const HospitalPage = () => {
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [showRegularPatientForm, setShowRegularPatientForm] = useState(false);

  const [newPatient, setNewPatient] = useState({
    name: "",
    purpose: "",
    disease: "",
    contact: "",
    address: "",
    age: "",
  });

  const [regularPatient, setRegularPatient] = useState({
    name: "",
    patientId: "",
  });

  const hospitals = [
    {
      id: 1,
      name: "City Care Hospital",
      address: "123 Main Street, Chennai",
      contact: "044-2345678",
      specialization: "General & Multi-Speciality",
    },
    {
      id: 2,
      name: "Green Valley Hospital",
      address: "45 Green Avenue, Bangalore",
      contact: "080-7654321",
      specialization: "Cardiology, Neurology",
    },
  ];

  // Handle new patient form submit
  const handleNewPatientSubmit = (e) => {
    e.preventDefault();
    console.log("New Patient Data:", newPatient);

   

    alert("New Patient Registered! Redirecting to New Patient Dashboard...");
  
    window.location.href = "/new-patient-dashboard";
  };

  // Handle regular patient form submit
  const handleRegularPatientSubmit = (e) => {
    e.preventDefault();
    console.log("Regular Patient Data:", regularPatient);

    

    alert("Regular Patient Login Successful! Redirecting to Dashboard...");
    window.location.href = "/regular-patient-dashboard";
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center"> Hospital Profiles</h1>

      {/* Hospital List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{hospital.name}</h2>
            <p><strong>Address:</strong> {hospital.address}</p>
            <p><strong>Contact:</strong> {hospital.contact}</p>
            <p><strong>Specialization:</strong> {hospital.specialization}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => {
            setShowNewPatientForm(true);
            setShowRegularPatientForm(false);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          New Patient
        </button>

        <button
          onClick={() => {
            setShowRegularPatientForm(true);
            setShowNewPatientForm(false);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Regular Patient
        </button>
      </div>

      {/* New Patient Form */}
      {showNewPatientForm && (
        <form
          onSubmit={handleNewPatientSubmit}
          className="mt-6 border p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4"> New Patient Registration</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border mb-2 rounded"
            value={newPatient.name}
            onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Purpose"
            className="w-full p-2 border mb-2 rounded"
            value={newPatient.purpose}
            onChange={(e) => setNewPatient({ ...newPatient, purpose: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Disease"
            className="w-full p-2 border mb-2 rounded"
            value={newPatient.disease}
            onChange={(e) => setNewPatient({ ...newPatient, disease: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full p-2 border mb-2 rounded"
            value={newPatient.contact}
            onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2 border mb-2 rounded"
            value={newPatient.address}
            onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Age"
            className="w-full p-2 border mb-2 rounded"
            value={newPatient.age}
            onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}

      {/* Regular Patient Form */}
      {showRegularPatientForm && (
        <form
          onSubmit={handleRegularPatientSubmit}
          className="mt-6 border p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4"> Regular Patient Login</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border mb-2 rounded"
            value={regularPatient.name}
            onChange={(e) => setRegularPatient({ ...regularPatient, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Patient ID"
            className="w-full p-2 border mb-2 rounded"
            value={regularPatient.patientId}
            onChange={(e) =>
              setRegularPatient({ ...regularPatient, patientId: e.target.value })
            }
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default HospitalPage;
