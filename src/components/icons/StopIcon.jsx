export const StopIcon = ({ size = 24 }) => {
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
      <path
        d='M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z'
        strokeWidth='0'
        fill='currentColor'
      ></path>
    </svg>
  )
}
