import AppLayout from '../layouts/AppLayout'
import { Card, CardHeader } from '../components/Card'
import Button from '../components/Button'
import { useState } from 'react'

export default function Appointments() {
  const [items, setItems] = useState([
    { id: 1, doctor: 'Dr. Meera N', dept: 'Cardiology', time: '2025-08-25 10:30', status: 'Confirmed' },
    { id: 2, doctor: 'Dr. Arjun K', dept: 'Endocrinology', time: '2025-08-27 16:00', status: 'Pending' },
  ])

  return (
    <AppLayout>
      <Card>
        <CardHeader title="Upcoming Appointments" right={<Button>New Booking</Button>} />
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