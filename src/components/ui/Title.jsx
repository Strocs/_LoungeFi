import { motion } from 'framer-motion'

export function Title () {
  return (
    <motion.h1
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='text-3xl font-extralight leading-none whitespace-nowrap'
    >
      _L
      <img
        src='/logo_title.png'
        alt='Icon of the website'
        className='inline-block h-[18px] aspect-square'
        width={18}
        height={18}
      />
      unge
      <motion.b
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className='font-bold'
      >
        Fi
      </motion.b>
    </motion.h1>
  )
}
