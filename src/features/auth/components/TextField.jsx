import { ErrorMessage, Input } from '@components/ui'

export const TextField = ({ placeholder, type, name, value, onChange, required, error, errorText, label }) => {
  return (
    <label htmlFor={name} name={name}>
      <span className='ml-3'>{label}</span>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        customClass={error ? 'outline-red' : ''}
        required={required}
      />
      {error && <ErrorMessage errorText={errorText} className='mt-2 ml-3' />}
    </label>
  )
}
