import { useState } from "react";
import DoctorLayout from "../layouts/DoctorLayout";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const DoctorHome = () => {
    const [analytics] = useState({
        totalPatients: 248,
        scheduledAppointments: 56,
        onlineConsults: 34,
        reviews: 89,
    });

    const data = [
        { name: "Patients", value: analytics.totalPatients },
        { name: "Appointments", value: analytics.scheduledAppointments },
        { name: "Online Consults", value: analytics.onlineConsults },
        { name: "Reviews", value: analytics.reviews },
    ];

    const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"];

    return (
        <DoctorLayout>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Dashboard</h1>
                    <p className="text-gray-600">
                        Welcome, Doctor! Here you can manage your appointments, view patients,
                        and update medical records.
                    </p>
                </div>
            </div>

        </DoctorLayout>
    );
};

export default DoctorHome;
