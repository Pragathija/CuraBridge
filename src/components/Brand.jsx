export default function Brand({ className = "" }) {
  return (
    <div className={"flex items-center gap-2 " + className}>
      <img src="/cura.svg" alt="Cura" className="w-7 h-7" />
      <span className="text-xl font-bold text-cura-700">Cura</span>
    </div>
  )
}