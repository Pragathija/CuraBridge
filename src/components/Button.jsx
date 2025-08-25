export default function Button({ as: As = 'button', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-sm hover:shadow transition'
  return <As className={base + ' bg-cura-500 text-white hover:bg-cura-600 ' + className} {...props} />
}