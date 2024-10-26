export const CloseIcon = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M18 6l-12 12'></path>
      <path d='M6 6l12 12'></path>
    </svg>
  )
}
