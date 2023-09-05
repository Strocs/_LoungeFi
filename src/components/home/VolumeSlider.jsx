import { useEffect, useRef, useState } from 'react'

function VolumeSlider({ volume, setVolume }) {
  const ref = useRef(null)

  const [clicking, setClicking] = useState(false)
  const [sliderCoordinates, setSliderCoordinates] = useState({ x: 0, w: 0 })

  function handleMouseDown(e) {
    setClicking(true)
    changeVolume(e)
  }

  function handleMouseUp(e) {
    setClicking(false)
  }

  function handleMouseMove(e) {
    if (clicking) {
      changeVolume(e)
    }
  }

  function changeVolume(e) {
    const mouseX = e.clientX
    setVolume(Math.min(Math.max(round((mouseX - sliderCoordinates.x) / sliderCoordinates.w), 0), 1))
  }

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect()
    setSliderCoordinates({ x: rect.x, w: rect.width })
  }, [volume])

  return (
    <div className='select-none mt-2 mx-1'>
      <div
        onMouseDown={handleMouseDown}
        onMouseOut={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        ref={ref}
        className='w-auto flex justify-between gap-1'>
        {Array.from({ length: 10 }, (_, i) => i / 10).map((_, i) => (
          <Block key={i} on={i < volume * 10} />
        ))}
      </div>
    </div>
  )
}

const Block = ({ on }) => {
  return (
    <div
      className={`w-full h-3 pointer-events-none bg-white ${on ? 'opacity-100' : 'opacity-50'}`}
    />
  )
}

function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

// return (
//   <input
//     onChange={(e) => setVolume(parseFloat(e.target.value))}
//     step="0.01"
//     type="range"
//     min="0"
//     max="1"
//     value={volume}
//     id="volume-slider"
//   ></input>
// );

export default VolumeSlider
