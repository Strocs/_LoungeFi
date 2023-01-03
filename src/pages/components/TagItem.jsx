export const TagItem = ({ text, children, color }) => {
  return (
    <li
      className={`flex items-center px-2 py-1 w-fit rounded text-white text-xs font-light leading-none ${
        color === 'green' ? 'bg-green-700' : ''
      } ${color === 'yellow' ? 'bg-yellow-500' : ''} ${
        color === 'red' ? 'bg-red-700' : ''
      } ${!color ? 'bg-slate-500' : ''} ${
        color === 'done' ? 'bg-placeholder-light' : ''
      }`}
    >
      {text[0].toUpperCase() + text.slice(1)}
      {children}
    </li>
  )
}
