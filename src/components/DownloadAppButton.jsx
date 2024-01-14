import { useState, useEffect } from 'react'
import { DownloadIcon } from './icons'
import { Button } from './ui'
import { motion, AnimatePresence } from 'framer-motion'

export const DownloadAppButton = ({ onClick }) => {
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    const enter = setTimeout(() => setShowLabel(true), 2000)
    const exit = setTimeout(() => setShowLabel(false), 6000)
    return () => clearTimeout(enter, exit)
  }, [])

  return (
    <div className='relative w-fit h-fit justify-self-end'>
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute z-10 -right-1 bottom-12 px-6 py-1 rounded-full text-md tracking-wider whitespace-nowrap bg-white text-darkGrey after:content-[""] after:w-6 after:h-3 after:bg-white after:absolute after:-z-10 after:right-2.5 after:-bottom-2 after:[clip-path:polygon(0_0,50%_100%,100%_0)]'
          >
            <h3 className='font-bold'>
              Get <span className='text-blue'>App</span>
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        size='round-md'
        className='hover:-translate-y-1 bg-transparent text-white'
        onClick={onClick}
      >
        <DownloadIcon size={28} />
      </Button>
    </div>
  )
}
