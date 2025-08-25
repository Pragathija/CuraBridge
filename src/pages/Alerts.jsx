import AppLayout from '../layouts/AppLayout'
import { Card, CardHeader } from '../components/Card'
import Button from '../components/Button'
import { useState } from 'react'

export default function Alerts() {
  const [items, setItems] = useState([
    { id: 1, type: 'Fall Detected', time: 'Today 08:42', status: 'Resolved' },
    { id: 2, type: 'Low SpO₂', time: 'Yesterday 22:14', status: 'Escalated' },
  ])

  return (
    <AppLayout>
      <Card>
        <CardHeader title="Emergency & System Alerts" right={<Button>Trigger SOS</Button>} />
        <div className="space-y-3">
          {items.map(a => (
            <div key={a.id} className="rounded-xl border p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{a.type}</p>
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