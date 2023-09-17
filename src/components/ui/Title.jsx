import { motion } from 'framer-motion'

export function Title() {
  return (
    <motion.h1
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='text-3xl font-extralight leading-none'>
      _Lounge
      <motion.b
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className='font-bold'>
        Fi
      </motion.b>
    </motion.h1>
  )
}
