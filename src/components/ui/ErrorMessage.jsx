export const ErrorMessage = ({ errorText = '', className: customClass = '', ...props }) => {
  return (
    <p {...props} className={`text-sm leading-none text-red ${customClass}`}>
      {errorText}
    </p>
  )
}
