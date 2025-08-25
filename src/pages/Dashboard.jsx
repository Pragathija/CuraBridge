import AppLayout from '../layouts/AppLayout'
import VitalCard from '../components/VitalCard'
import VitalsChart from '../components/VitalsChart'
import { useEffect, useState } from 'react'
import { HealthAPI } from '../services/api'
import { Card, CardHeader } from '../components/Card'

export default function Dashboard() {
  const [vitals, setVitals] = useState({ hr: 76, bp: '120/80', spo2: 98, temp: 36.8 })
  const [hrData, setHrData] = useState([])

  useEffect(() => {
    // Demo data generation
    const now = Date.now()
    const data = Array.from({ length: 24 }, (_, i) => ({
      t: new Date(now - (23 - i) * 60 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      hr: 65 + Math.round(Math.random() * 30),
    }))
    setHrData(data)

    // Example fetch (backend optional)
    HealthAPI.vitals().catch(() => {}) // ignore in demo
  }, [])

  return (
    <AppLayout>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <VitalCard label="Heart Rate" value={vitals.hr} unit="bpm" />
        <VitalCard label="Blood Pressure" value={vitals.bp} unit="mmHg" />
        <VitalCard label="SpO₂" value={vitals.spo2} unit="%" />
        <VitalCard label="Temperature" value={vitals.temp} unit="°C" />
      </div>

      <VitalsChart title="Heart Rate" data={hrData} dataKey="hr" />

      <Card>
        <CardHeader title="Quick Actions" />
        <div className="grid sm:grid-cols-3 gap-3">
          <a href="/appointments" className="rounded-xl border p-4 hover:bg-slate-50">Book Appointment</a>
          <a href="/medications" className="rounded-xl border p-4 hover:bg-slate-50">Manage Medications</a>
          <a href="/alerts" className="rounded-xl border p-4 hover:bg-slate-50">Emergency & Alerts</a>
        </div>
      </Card>
    </AppLayout>
  )
}