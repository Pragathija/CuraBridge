<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const hospitalsData = [
  {
    id: 1,
    name: "Galaxy Hospital",
    location: "Chennai",
    specialties: [
      "Cardiology - Dr.Meena, Dr.Neha, Dr.Varun Kumar, Dr.Selvi",
      "Orthopedics - Dr.Ravi, Dr.Suresh, Dr.Kumar, Dr.Akila",
      "Neurology - Dr.Anu, Dr.Raj, Dr.Vikram, Dr.Latha",
      "Pediatrics - Dr.Shanthi, Dr.Manoj, Dr.Priya, Dr.Anitha",
    ],
    description:
      "Galaxy Hospital stands as one of the most trusted and advanced medical institutions, dedicated to delivering world-class healthcare with compassion, innovation, and excellence. Equipped with cutting-edge technology and a team of highly skilled doctors, nurses, and specialists, Galaxy Hospital has become a symbol of hope and healing for countless patients. The hospital offers comprehensive medical services, ranging from emergency care and critical care units to specialized departments such as cardiology, neurology, oncology, orthopedics, pediatrics, nephrology, gynecology, and more.",
    image: "/src/HospitalLogos/Galaxy.jpg",
  },
  {
    id: 2,
    name: "Apollo Hospital",
    location: "Chennai",
    specialties: [
      "General Medicine - Dr.Anu, Dr.Raj",
      "Emergency Care - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "Apollo Hospital is a pioneer in healthcare excellence, known for its extensive network and commitment to patient care. With a blend of modern infrastructure and highly qualified medical professionals, Apollo provides world-class treatment across multiple specialties. Its departments cover everything from general medicine and emergency services to advanced surgical care. The hospital also emphasizes preventive health checkups and wellness programs, ensuring long-term health for patients. With its legacy of trust, Apollo Hospital continues to be a first choice for families seeking reliable and comprehensive healthcare.",
    image: "/src/HospitalLogos/cura.jpg",
  },
  {
    id: 3,
    name: "City Hospital",
    location: "Chennai",
    specialties: [
      "Cardiology - Dr.Anu, Dr.Raj",
      "Emergency Care - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "City Hospital is a well-recognized healthcare facility offering advanced diagnostic and treatment solutions for patients in Chennai. Known for its compassionate service, City Hospital specializes in emergency care, cardiology, and critical care support. Its dedicated team of doctors and nurses ensure personalized treatment tailored to every patient’s needs. With a focus on affordability and patient satisfaction, City Hospital provides reliable healthcare while maintaining high standards of hygiene, safety, and technology-driven practices.",
    image: "/src/HospitalLogos/city.jpg",
  },
  {
    id: 4,
    name: "Galaxy Hospital",
    location: "Chennai",
    specialties: [
      "Cardiology - Dr.Anu, Dr.Raj",
      "Emergency Care - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "Galaxy Hospital (Branch II) continues the legacy of trusted healthcare with a focus on emergency care and cardiology. Equipped with modern ICUs, diagnostic centers, and a team of experienced doctors, this branch caters to patients requiring immediate and specialized attention. By extending the reach of its parent institution, Galaxy Hospital ensures that more patients benefit from affordable, compassionate, and top-quality treatment in Chennai.",
    image: "/src/HospitalLogos/galaxy.jpg",
  },
  {
    id: 5,
    name: "Apollo Hospital",
    location: "Chennai",
    specialties: [
      "General Medicine - Dr.Anu, Dr.Raj",
      "Emergency Care - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "Apollo Hospital (Branch II) provides the same high standards of healthcare excellence that the Apollo network is renowned for. The hospital integrates advanced technology, skilled physicians, and efficient emergency care services to handle diverse patient needs. With a special focus on general medicine and emergency response, this branch acts as a lifeline for patients in Chennai, delivering care that is quick, accurate, and compassionate.",
    image: "/src/HospitalLogos/cura.jpg",
  },
  {
    id: 6,
    name: "City Hospital",
    location: "Chennai",
    specialties: [
      "Cardiology - Dr.Anu, Dr.Raj",
      "Emergency Care - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "City Hospital (Branch II) strengthens the hospital’s commitment to delivering accessible and affordable healthcare to the people of Chennai. With advanced facilities in cardiology and emergency services, this branch provides immediate medical support for patients in critical conditions. It combines modern medical practices with patient-focused care, ensuring that every individual feels safe, supported, and respected.",
    image: "/src/HospitalLogos/city.jpg",
  },
  {
    id: 7,
    name: "LifeLine Medical Center",
    location: "Chennai",
    specialties: [
      "Cardiology - Dr.Anu, Dr.Raj",
      "Emergency Care - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "LifeLine Medical Center is dedicated to offering holistic healthcare solutions with an emphasis on patient-centric service. Known for its efficiency in handling emergencies and cardiac cases, the hospital is staffed with a dedicated team of doctors and nurses who prioritize patient well-being. Its commitment to affordability, cleanliness, and quality medical care makes LifeLine Medical Center a trusted healthcare destination for families in Chennai.",
    image: "/src/HospitalLogos/lifeline.jpg",
  },
  {
    id: 8,
    name: "HealthPlus Clinic",
    location: "Chennai",
    specialties: [
      "General Medicine - Dr.Anu, Dr.Raj",
      "Pediatrics - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "HealthPlus Clinic combines modern medical practices with a family-friendly environment. Specializing in pediatrics and general medicine, the clinic is ideal for families seeking routine consultations, vaccinations, and preventive health checkups. With experienced pediatricians and general practitioners, HealthPlus Clinic focuses on long-term wellness and preventive healthcare, ensuring that patients of all ages receive the attention and treatment they deserve.",
    image: "/src/HospitalLogos/healthplus.jpg",
  },
  {
    id: 9,
    name: "NewLife Hospital",
    location: "Chennai",
    specialties: [
      "Cardiology - Dr.Anu, Dr.Raj",
      "Emergency Care - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "NewLife Hospital lives up to its name by offering patients a chance at renewed health and recovery. Specializing in cardiology and emergency services, the hospital provides immediate medical intervention supported by advanced equipment and skilled healthcare professionals. Its mission is to save lives and restore wellness with a blend of compassion, innovation, and ethical medical practices.",
    image: "/src/HospitalLogos/newlife.jpg",
  },
  {
    id: 10,
    name: "CareMax Hospital",
    location: "Chennai",
    specialties: [
      "General Medicine - Dr.Anu, Dr.Raj",
      "Pediatrics - Dr.Suresh, Dr.Kumar",
    ],
    description:
      "CareMax Hospital is committed to maximizing patient care through affordable and comprehensive healthcare services. With strengths in general medicine and pediatrics, the hospital provides a safe and supportive environment for patients of all ages. CareMax emphasizes preventive care, child health programs, and continuous medical support to ensure healthier communities. Its team of doctors works tirelessly to maintain the highest standards of treatment and patient satisfaction.",
    image: "/src/HospitalLogos/caremax.jpg",
  }
];


const HospitalProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospital = hospitalsData.find((h) => h.id === parseInt(id));

  const [isNewPatient, setIsNewPatient] = useState(false);
  const [isOldPatient, setIsOldPatient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    bloodGroup: "",
    problem: "",
    whyChoosingUs: "",
    password: "",
    confirmPassword: "",
  });
  const [patientID, setPatientID] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!hospital)
    return <p className="text-center text-red-500">Hospital not found.</p>;

  const handleNewPatientSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setSuccessMessage("⚠️ Passwords do not match!");
      return;
    }
    const generatedID = "PAT" + Math.floor(1000 + Math.random() * 9000);
    setPatientID(generatedID);
    setSuccessMessage(`✅ Registration Successful! Your Patient ID: ${generatedID}`);
    setFormData({
      name: "",
      age: "",
      gender: "",
      contact: "",
      address: "",
      bloodGroup: "",
      problem: "",
      whyChoosingUs: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleOldPatientSubmit = (e) => {
    e.preventDefault();
    if (!patientID || !formData.password) {
      setSuccessMessage("⚠️ Please enter Patient ID and Password!");
      return;
    }
    setSuccessMessage("✅ Login Successful! Redirecting...");
    setTimeout(
      () => navigate(`/hospital/${hospital.id}/dashboard/${patientID}`),
      1500
    );
  };

  return (
    <div className="min-h-screen bg-[url('../bgc1.jpg')] bg-cover bg-center flex flex-col items-center p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-4 px-4 py-2 bg-cura-600 text-white rounded-lg hover:bg-cura-500"
      >
        ← Back
      </button>

      {/* Hospital Card */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg flex flex-col lg:flex-row p-6 gap-6">
        {/* Left Side: Image */}
        {hospital.image && (
          <div className="w-full lg:w-1/2 flex justify-center items-start">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full max-h-96 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-cura-700">{hospital.name}</h1>
            <p className="text-lg text-gray-600">{hospital.location}</p>
            <p className="mt-3 text-gray-700">{hospital.description}</p>

            <h2 className="mt-4 font-semibold text-lg">Specialties:</h2>
            <ul className="list-disc ml-6 text-gray-600">
              {hospital.specialties.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* Buttons Row */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
>>>>>>> 6d87daa34755e29f5aa2341355727c62c7e38e40
            <button
              onClick={() => {
                setIsNewPatient(true);
                setIsOldPatient(false);
<<<<<<< HEAD
                setLastGeneratedId(""); // reset ID display
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
=======
                setSuccessMessage("");
              }}
              className="px-6 py-2 bg-cura-600 text-white rounded-lg hover:bg-cura-500"
>>>>>>> 6d87daa34755e29f5aa2341355727c62c7e38e40
            >
              New Patient
            </button>
            <button
              onClick={() => {
                setIsOldPatient(true);
                setIsNewPatient(false);
<<<<<<< HEAD
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
=======
                setSuccessMessage("");
              }}
              className="px-6 py-2 bg-cura-600 text-white rounded-lg hover:bg-cura-500"
            >
              Old Patient
            </button>
            <button
              onClick={() =>
                window.open("https://www.hospitalgalaxy.in/", "_blank")
              }
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {(isNewPatient || isOldPatient) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg md:max-w-3xl relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsNewPatient(false);
                setIsOldPatient(false);
              }}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            {/* New Patient Form */}
            {isNewPatient && (
              <div>
                <h2 className="text-2xl font-bold text-cura-700 mb-6 text-center">
                  New Patient Registration
                </h2>

                <form
                  onSubmit={handleNewPatientSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {[
                    { name: "name", type: "text", placeholder: "Full Name" },
                    { name: "age", type: "number", placeholder: "Age" },
                    { name: "contact", type: "tel", placeholder: "Contact Number" },
                    {
                      name: "gender",
                      type: "select",
                      placeholder: "Select Gender",
                      options: ["Male", "Female", "Other"],
                    },
                    {
                      name: "address",
                      type: "textarea",
                      placeholder: "Address",
                      span: 2,
                    },
                    {
                      name: "bloodGroup",
                      type: "select",
                      placeholder: "Blood Group",
                      options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
                    },
                    {
                      name: "problem",
                      type: "text",
                      placeholder: "Patient Problem",
                    },
                    {
                      name: "whyChoosingUs",
                      type: "textarea",
                      placeholder: "Why Choosing Us",
                      span: 2,
                    },
                    {
                      name: "password",
                      type: "password",
                      placeholder: "Set Password",
                    },
                    {
                      name: "confirmPassword",
                      type: "password",
                      placeholder: "Confirm Password",
                    },
                  ].map((field, i) =>
                    field.type === "textarea" ? (
                      <textarea
                        key={i}
                        placeholder={field.placeholder}
                        className={`w-full border border-cura-300 focus:border-cura-500 focus:ring focus:ring-cura-200 p-3 rounded-lg col-span-${field.span || 1}`}
                        value={formData[field.name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        required={field.name !== "whyChoosingUs"}
                      />
                    ) : field.type === "select" ? (
                      <select
                        key={i}
                        className="w-full border border-cura-300 focus:border-cura-500 focus:ring focus:ring-cura-200 p-3 rounded-lg"
                        value={formData[field.name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        required
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options.map((opt, idx) => (
                          <option key={idx}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        key={i}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full border border-cura-300 focus:border-cura-500 focus:ring focus:ring-cura-200 p-3 rounded-lg"
                        value={formData[field.name]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        required
                      />
                    )
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-cura-600 text-white py-3 rounded-lg hover:bg-cura-700 col-span-2 transition"
                  >
                    Register
                  </button>
                </form>
              </div>
            )}

            {/* Old Patient Form */}
            {isOldPatient && (
              <form onSubmit={handleOldPatientSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-cura-700 mb-6 text-center">
                  Old Patient Login
                </h2>
                <input
                  type="text"
                  placeholder="Enter Patient ID"
                  className="w-full border border-cura-300 focus:border-cura-500 focus:ring focus:ring-cura-200 p-3 rounded-lg"
                  value={patientID}
                  onChange={(e) => setPatientID(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full border border-cura-300 focus:border-cura-500 focus:ring focus:ring-cura-200 p-3 rounded-lg"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-cura-600 text-white py-3 rounded-lg hover:bg-cura-700 transition"
                >
                  Login
                </button>
              </form>
            )}

            {/* Success/Error Message */}
            {successMessage && (
              <div
                className={`mt-4 p-3 rounded-lg text-center font-medium ${successMessage.includes("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                  }`}
              >
                {successMessage}
              </div>
            )}
          </div>
>>>>>>> 6d87daa34755e29f5aa2341355727c62c7e38e40
        </div>
      )}
    </div>
  );
};

export default HospitalPage;
