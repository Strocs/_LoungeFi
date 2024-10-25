import { clsx } from 'clsx'

export const Input = ({
  name = '',
  className: customClass = '',
  children,
  reference,
  isRadioOn = false,
  ...props
}) => {
  return (
    <input
      name={name}
      id={name}
      ref={reference}
      className={clsx(
        'h-fit w-full rounded-full px-4 py-1 text-sm font-normal text-dark transition-[background-color,outline] duration-150 placeholder:text-sm',
        {
          'bg-black/80 text-slate-100 placeholder:text-grey': isRadioOn,
          'border-2 border-blue bg-slate-100': !isRadioOn,
        },
        customClass,
      )}
      {...props}
    />
  )
}
