import React, { useState } from "react";
import Select from "react-select"; // Import react-select

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

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ];

  const handleChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta;
    setFormData((prev) => ({
      ...prev,
      [name]: selectedOption.value
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
              onChange={(e) => handleChange(e.target, { name: "name" })}
              required
              className="w-full p-3 border rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => handleChange(e.target, { name: "age" })}
                required
                className="p-3 border rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <Select
                name="gender"
                options={genderOptions}
                placeholder="Select Gender"
                value={genderOptions.find((option) => option.value === formData.gender)}
                onChange={handleChange}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isFocused
                      ? "lightgreen" // hover background
                      : state.isSelected
                      ? "green" // selected background
                      : "white",
                    color: state.isSelected ? "white" : "black"
                  }),
                  control: (provided) => ({
                    ...provided,
                    borderRadius: "0.5rem",
                    borderColor: "#065f46", // Tailwind's cura-600 color
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: "#065f46"
                    }
                  })
                }}
              />
            </div>

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={(e) => handleChange(e.target, { name: "contact" })}
              required
              className="w-full p-3 border rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />

            {/* Doctor Selection */}
            <Select
  name="doctor"
  options={doctors.map((doc) => ({ value: doc, label: doc }))}
  placeholder="Select Doctor"
  value={doctors.map((doc) => ({ value: doc, label: doc })).find((option) => option.value === formData.doctor)}
  onChange={(selectedOption) => handleChange(selectedOption, { name: "doctor" })}
  styles={{
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "lightgreen" // hover background
        : state.isSelected
        ? "green" // selected background
        : "white",
      color: state.isSelected ? "white" : "black"
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      borderColor: "#065f46", // Tailwind's cura-600 color
      boxShadow: "none",
      "&:hover": {
        borderColor: "#065f46"
      }
    })
  }}
/>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => handleChange(e.target, { name: "date" })}
                required
                className="p-3 border rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={(e) => handleChange(e.target, { name: "time" })}
                required
                className="p-3 border rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Purpose */}
            <textarea
              name="purpose"
              placeholder="Appointment Purpose"
              value={formData.purpose}
              onChange={(e) => handleChange(e.target, { name: "purpose" })}
              required
              className="w-full p-3 border rounded-lg appearance-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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