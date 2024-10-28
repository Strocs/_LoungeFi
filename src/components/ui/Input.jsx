import { cn } from '@utils/clsxWithTailwindMerge'

export const Input = ({ name = '', className: customClass = '', children, reference, isRadioOn = false, ...props }) => {
  return (
    <input
      name={name}
      id={name}
      ref={reference}
      className={cn(
        'h-fit w-full rounded-full bg-slate-100 px-4 py-1 font-normal text-dark text-sm outline outline-2 outline-blue transition-[background-color,outline] duration-150 placeholder:text-sm',
        isRadioOn && 'bg-black/20 text-slate-100 outline-black/20 placeholder:text-grey',
        customClass
      )}
      {...props}
    />
  )
}
