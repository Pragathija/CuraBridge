import { Bell, CalendarCheck, PhoneCall } from "lucide-react";

export default function DoctorFooter() {
  return (
    <footer className="fixed bottom-0 w-full bg-white flex items-center justify-between px-6 py-3 shadow-lg">
      <div className="flex flex-col items-center text-gray-700">
        <Bell className="text-yellow-600 h-9 w-9" />
        <span className="text-xs">Notifications</span>
      </div>

      <div className="flex flex-col items-center text-gray-700">
        <CalendarCheck className="text-blue-600 h-9 w-9" />
        <span className="text-xs">Appointments</span>
      </div>

      <div className="flex flex-col items-center text-gray-700">
        <PhoneCall className="text-green-600 h-9 w-9" />
        <span className="text-xs">Online Consult</span>
      </div>
    </footer>
  );
}
