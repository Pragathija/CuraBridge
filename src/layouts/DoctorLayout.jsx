import DoctorFooter from '../components/DoctorFooter'
import DoctorHeader from '../components/DoctorHeader'

export default function DoctorLayout({ children }) {
  return (
    <div className="min-h-screen">
      <DoctorHeader />
      <div className="mx-auto max-w-7xl px-4 py-6 flex gap-6 ">
        <main className="flex-1 space-y-6">{children}</main>
      </div>
      <DoctorFooter />
    </div>
  )
}