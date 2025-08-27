import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    doctor: "",
    date: "",
    time: "",
    purpose: "",
    paymentMethod: "Online Payment"
  });

  const [submitted, setSubmitted] = useState(false);

  const doctors = [
    "Dr. John Smith - Cardiologist",
    "Dr. Emily Johnson - Neurologist",
    "Dr. Michael Lee - Orthopedic",
    "Dr. Sarah Davis - Pediatrician"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save appointment (you can integrate with backend/MongoDB here)
    console.log("Appointment Data:", formData);

    setSubmitted(true);
  };

  return (
    <div className="bg-[url('bgc1.jpg')] bg-cover bg-center opacity-100 min-h-screen flex justify-center items-center">
      <div className="shadow-lg rounded-2xl p-8 w-full max-w-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 text-cura-600">
          Book an Appointment
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Patient Details */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg bg-white text-black"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            {/* Doctor Selection */}
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Doctor</option>
              {doctors.map((doc, index) => (
                <option key={index} value={doc}>
                  {doc}
                </option>
              ))}
            </select>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg"
              />
            </div>

            {/* Purpose */}
            <textarea
              name="purpose"
              placeholder="Appointment Purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />

            {/* Payment */}
            <input
              type="text"
              name="paymentMethod"
              value={formData.paymentMethod}
              disabled
              className="w-full p-3 border rounded-lg bg-gray-100 text-gray-500"
            />

            <button
              type="submit"
              className="w-full bg-cura-600 text-white p-3 rounded-lg font-semibold hover:bg-cura-700 transition"
            >
              Confirm Appointment
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
               Appointment Submitted Successfully!
            </h3>
            <p className="text-gray-600">
              Your appointment is <strong>under review</strong>.  
              You will receive a notification once the doctor accepts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
