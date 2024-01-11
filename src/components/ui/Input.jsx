export const Input = ({
  name = '',
  customClass = '',
  children,
  reference,
  ...props
}) => {
  return (
    <input
      name={name}
      id={name}
      ref={reference}
      className={`h-full w-full placeholder:text-sm text-sm bg-slate-100 rounded-full px-4 py-1 text-dark outline outline-2 outline-blue ${customClass}`}
      {...props}
    />
  )
}
