import AppLayout from '../layouts/AppLayout'
import { Card, CardHeader } from '../components/Card'

export default function Records() {
  const items = [
    { id: 1, title: 'Blood Test – Jun 2025', file: 'blood-test-jun2025.pdf' },
    { id: 2, title: 'ECG – May 2025', file: 'ecg-may2025.pdf' },
  ]

  return (
    <AppLayout>
      <Card>
        <CardHeader title="Health Records" />
        <div className="divide-y">
          {items.map(r => (
            <a key={r.id} href="#" className="flex items-center justify-between py-3 hover:bg-slate-50 rounded-lg px-2">
              <span>{r.title}</span>
              <span className="text-sm text-slate-500">{r.file}</span>
            </a>
          ))}
        </div>
      </Card>
    </AppLayout>
  )
}