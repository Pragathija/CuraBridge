import AppLayout from '../layouts/AppLayout'
import { Card, CardHeader } from '../components/Card'
import Button from '../components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Appointments() {
  const [items, setItems] = useState([
    { id: 1, doctor: 'Dr. Meera N', dept: 'Cardiology', time: '2025-08-25 10:30', status: 'Confirmed' },
    { id: 2, doctor: 'Dr. Arjun K', dept: 'Endocrinology', time: '2025-08-27 16:00', status: 'Pending' },
    { id: 3, doctor: 'Dr. Sita R', dept: 'Neurology', time: '2025-09-01 09:00', status: 'Cancelled' },
    { id: 4, doctor: 'Dr. Ravi T', dept: 'Orthopedics', time: '2025-09-05 11:00', status: 'Available' },
    { id: 5, doctor: 'Dr. Anjali P', dept: 'Pediatrics', time: '2025-09-10 14:30', status: 'Available' },
    { id: 6, doctor: 'Dr. Vikram S', dept: 'Dermatology', time: '2025-09-12 13:00', status: 'Available' },
    { id: 7, doctor: 'Dr. Neha B', dept: 'Psychiatry', time: '2025-09-15 15:00', status: 'Available' },
    { id: 8, doctor: 'Dr. Rahul M', dept: 'General Medicine', time: '2025-09-20 10:00', status: 'Available' },
    { id: 9, doctor: 'Dr. Priya S', dept: 'Ophthalmology', time: '2025-09-25 11:30', status: 'Available' },
    { id: 10, doctor: 'Dr. Sameer T', dept: 'Cardiology', time: '2025-09-30 12:00', status: 'Available' },
    { id: 11, doctor: 'Dr. Neha B', dept: 'Psychiatry', time: '2025-10-05 15:00', status: 'Available' }
  ])

  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/booking');
  };

  return (
    <AppLayout>
      <Card>
        <CardHeader title="Upcoming Appointments" right={<Button onClick={handleSelect} >New Booking</Button>} />
        <div className="divide-y">
          {items.map(a => (
            <div key={a.id} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{a.doctor} • {a.dept}</p>
                <p className="text-sm text-slate-500">{a.time}</p>
              </div>
              <span className="text-sm rounded-full px-3 py-1 bg-cura-50 text-cura-700">{a.status}</span>
            </div>
          ))}
        </div>
      </Card>
    </AppLayout>
  )
}