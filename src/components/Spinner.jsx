import { useEffect, useRef } from 'react'

export const Spinner = ({ size = 40, speed = 2 }) => {
  const svgContainer = useRef(null)

  useEffect(() => {
    const svg = svgContainer.current
    if (svg) {
      svg.style.setProperty('--spinner-speed', `${speed}s`)
    }
  }, [speed])

  return (
    <svg
      ref={svgContainer}
      className='origin-center animate-rotate overflow-visible will-change-transform'
      viewBox='0 0 40 40'
      height={size}
      width={size}
    >
      <circle
        className='animate-stretch stroke-current transition-[stroke] duration-500 will-change-[stroke-dasharray,stroke-dashoffset] [stroke-dasharray:1,200] [stroke-dashoffset:0]'
        strokeLinecap='round'
        cx='20'
        cy='20'
        r='17.5'
        pathLength='100'
        strokeWidth='2.4px'
        fill='none'
      />
    </svg>
  )
}
