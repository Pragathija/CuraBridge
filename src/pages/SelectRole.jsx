import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Stethoscope, HeartPulse } from "lucide-react"; // nice icons

export default function SelectRole() {
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setId("");
    setName("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !name || !password) {
      alert("Please fill in all fields (ID, Name, Password).");
      return;
    }

    // Store in localStorage (or Firebase if needed)
    localStorage.setItem("userRole", role);
    localStorage.setItem("userId", id);
    localStorage.setItem("userName", name);

    // Navigate based on role
    if (role === "Doctor") {
      navigate("/doctorhome", { state: { doctorId: id, doctorName: name } });
    } else if (role === "Patient") {
      navigate("/home", { state: { patientId: id, patientName: name } });
    } else if (role === "User") {
      navigate("/home", { state: { userId: id, userName: name } });
    }
  };

  const roles = [
    { name: "Doctor", color: "blue", icon: <Stethoscope size={40} /> },
    { name: "Patient", color: "green", icon: <HeartPulse size={40} /> },
    { name: "User", color: "purple", icon: <User size={40} /> }
  ];

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('bgc1.jpg')] bg-cover bg-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">


        {/* Role Cards */}
        {!role ? (
          <div>
            <h2 className="text-3xl font-bold text-center mb-10">Select Your Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roles.map((r) => (
                <div
                  key={r.name}
                  onClick={() => handleRoleSelect(r.name)}
                  className={`cursor-pointer rounded-2xl border-2 border-gray-200 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center justify-center p-10 hover:border-${r.color}-500`}
                >
                  <div className={`text-${r.color}-600 mb-4`}>{r.icon}</div>
                  <h3 className="text-xl font-semibold">{r.name}</h3>
                </div>
              ))}
            </div>
          </div>
      ) : (
      // Form after selecting role
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-cura-800 text-center mb-6">
          {role} Login
        </h3>
        <div>
          <label className="block font-medium">{role} ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder={`Enter ${role} ID`}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">{role} Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={`Enter ${role} Name`}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="w-full bg-cura-600 text-white py-3 rounded-lg hover:bg-cura-700 transition"
          >
            Continue to {role} Home
          </button>
          <button
            type="button"
            onClick={() => setRole("")}
            className="w-full bg-gray-300 text-black py-3 rounded-lg hover:bg-gray-400 transition"
          >
            Back
          </button>
        </div>
      </form>
        )}
    </div>
    </div >
  );
}
