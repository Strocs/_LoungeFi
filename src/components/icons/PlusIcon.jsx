export const PlusIcon = ({ size = 22 }) => {
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
      <path d='M12 5l0 14'></path>
      <path d='M5 12l14 0'></path>
    </svg>
  )
}
