import { cn } from '@utils/clsxWithTailwindMerge'

export const ErrorMessage = ({ errorText = '', className: customClass = '', ...props }) => {
  return (
    <p {...props} className={cn('text-red text-sm leading-none', customClass)}>
      {errorText}
    </p>
  )
}
