export const MoveIcon = ({ size = 24 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 18l3 3l3 -3' />
      <path d='M12 15v6' />
      <path d='M15 6l-3 -3l-3 3' />
      <path d='M12 3v6' />
    </svg>
  )
}
