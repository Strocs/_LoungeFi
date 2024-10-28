import { CloseIcon } from '@components/icons'
import { Button } from '@components/ui'
import { ANIMATION_VARIANTS } from '@constants'
import { AnimatePresence, motion } from 'framer-motion'

export const DeleteGroupModal = ({ group, onConfirm, onModal }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={ANIMATION_VARIANTS.opacity}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='absolute top-20 right-0 left-0 z-50 m-auto grid h-fit w-fit justify-items-center gap-3 rounded-2xl bg-slate-100 p-6 text-center text-dark text-sm outline outline-2 outline-red'
      >
        <p className='max-w-[14rem]'>
          Do you want to <b className='text-red'>delete</b> all <b>tasks</b> from <b>{group}</b>?
        </p>
        <div className='flex justify-center gap-4'>
          <Button size='md' color='white' hover='blue' outline='blue' onClick={() => onConfirm(true)}>
            Move to <b>All</b>
          </Button>
          <Button size='md' color='text-red' hover='red' outline='red' onClick={() => onConfirm(false)}>
            Just delete it
          </Button>
        </div>
        <Button
          color='text-red'
          outline='red'
          hover='red'
          size='round-sm'
          className='-top-4 absolute'
          onClick={() => onModal(false)}
        >
          <CloseIcon />
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}
