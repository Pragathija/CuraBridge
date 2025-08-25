import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-6 flex gap-6 ">
        <main className="flex-1 space-y-6">{children}</main>
      </div>
      <Footer />
    </div>
  )
}