import { useRadioStore } from '@features/radio/store'
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
  }, [sliderRef.current?.getBoundingClientRect().x])

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
      className={`w-auto flex py-2 justify-between gap-1 cursor-pointer transition-all duration-150 ${
        volume === 0 ? 'text-red' : 'text-slate-100'
      } ${isMobile ? 'hidden' : ''}`}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <span
          key={i}
          className={`w-full h-3 rounded-full pointer-events-none bg-current ${
            i / 10 < volume ? 'opacity-100' : 'opacity-50'
          }`}
        />
      ))}
    </div>
  )
}
