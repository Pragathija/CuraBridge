import { Card } from './Card'

export default function VitalCard({ label, value, unit, status='normal' }) {
  const color = status === 'alert' ? 'text-red-600' : status === 'warn' ? 'text-amber-600' : 'text-cura-700'
  return (
    <Card>
      <p className="text-sm text-slate-500">{label}</p>
      <p className={'mt-1 text-2xl font-bold ' + color}>
        {value}<span className="text-base font-semibold ml-1">{unit}</span>
      </p>
    </Card>
  )
}