export function Card({ className='', children }) {
  return <div className={'rounded-2xl bg-white shadow p-4 ' + className}>{children}</div>
}
export function CardHeader({ title, subtitle, right }) {
  return (
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      {right}
    </div>
  )
}