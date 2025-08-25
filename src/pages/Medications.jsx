import AppLayout from '../layouts/AppLayout'
import { Card, CardHeader } from '../components/Card'
import Button from '../components/Button'
import { useState } from 'react'

export default function Medications() {
  const [meds, setMeds] = useState([
    { id: 1, name: 'Metformin', dose: '500 mg', schedule: '08:00, 20:00' },
    { id: 2, name: 'Amlodipine', dose: '5 mg', schedule: '09:00' },
  ])

  return (
    <AppLayout>
      <Card>
        <CardHeader title="Medication Schedule" right={<Button>Add Medication</Button>} />
        <div className="grid sm:grid-cols-2 gap-3">
          {meds.map(m => (
            <div key={m.id} className="rounded-xl border p-4">
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-slate-500">{m.dose}</p>
              <p className="text-sm mt-2">⏰ {m.schedule}</p>
            </div>
          ))}
        </div>
      </Card>
    </AppLayout>
  )
}