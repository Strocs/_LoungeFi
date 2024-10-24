export const Input = ({
  name = '',
  customClass = '',
  children,
  reference,
  isRadioOn = false,
  ...props
}) => {
  const isRadioOnStyles = isRadioOn
    ? 'bg-opacityDark text-slate-100 placeholder:text-grey'
    : 'bg-slate-100 outline outline-2 outline-blue'

  return (
    <input
      name={name}
      id={name}
      ref={reference}
      className={`${isRadioOnStyles} transition-[background-color,outline] duration-150 h-fit w-full placeholder:text-sm text-sm rounded-full px-4 py-1 text-dark ${customClass}`}
      {...props}
    />
  )
}
