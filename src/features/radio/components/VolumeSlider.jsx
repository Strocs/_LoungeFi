import { useRadioStore } from '@features/radio/store'
import { cn } from '@utils/clsxWithTailwindMerge'
import { useEffect, useRef, useState } from 'react'

export const VolumeSlider = () => {
  const setVolume = useRadioStore((state) => state.setVolume)
  const volume = useRadioStore((state) => state.volume)

  const sliderRef = useRef(null)

  const [clicking, setClicking] = useState(false)
  const [{ x, width }, setCoordinates] = useState({ x: 0, width: 0 })
  const [isMobile, setIsMobile] = useState(false)

  const changeVolume = (e) => {
    const mouseX = e.clientX
    setVolume(+((mouseX - x) / width).toFixed(2))
  }

  const handleMouseDown = (e) => {
    setClicking(true)
    changeVolume(e)
  }

  const handleMouseUp = () => {
    setClicking(false)
  }

  const handleMouseMove = (e) => {
    if (!clicking) {
      return
    }
    changeVolume(e)
  }

  useEffect(() => {
    const { x, width } = sliderRef.current.getBoundingClientRect()
    setCoordinates({ x, width })
  }, [])

  useEffect(() => {
    if (window.PointerEvent && 'maxTouchPoints' in navigator) {
      if (navigator.maxTouchPoints > 0) {
        setIsMobile(true)
      }
    }
  }, [])

  return (
    <div
      role='slider'
      aria-label='Volumen'
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseUp}
      ref={sliderRef}
      className={cn(
        'flex w-auto cursor-pointer justify-between gap-1 py-2 text-slate-100 transition-all duration-150',
        volume === 0 && 'text-red',
        isMobile && 'hidden'
      )}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className={cn(
            'pointer-events-none h-3 w-full rounded-full bg-current opacity-50',
            i / 10 < volume && 'opacity-100'
          )}
        />
      ))}
    </div>
  )
}
