export const ErrorMessage = ({
  errorText = '',
  className: customClass = '',
  ...props
}) => {
  return (
    <p {...props} className={`text-red leading-none text-sm ${customClass}`}>
      {errorText}
    </p>
  )
}
