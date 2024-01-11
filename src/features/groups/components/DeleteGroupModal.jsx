import { CloseIcon } from '@components/icons'
import { Button } from '@components/ui'
import { ANIMATION_VARIANTS } from '@constants'
import { AnimatePresence, motion } from 'framer-motion'

export const DeleteGroupModal = ({ group, onConfirm, onModal }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={ANIMATION_VARIANTS.OPACITY}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='bg-white outline outline-2 outline-red rounded-2xl text-dark text-sm p-6 grid gap-3 justify-items-center absolute z-50 top-20 left-0 right-0 w-fit h-fit m-auto text-center'
      >
        <p className='max-w-[14rem]'>
          Do you want to <b className='text-red'>delete</b> all <b>tasks</b>{' '}
          from <b>{group}</b>?
        </p>
        <div className='flex gap-4 justify-center'>
          <Button
            size='md'
            color='white'
            hover='blue'
            outline='blue'
            onClick={() => onConfirm(true)}
          >
            Move to <b>All</b>
          </Button>
          <Button
            size='md'
            color='text-red'
            hover='red'
            outline='red'
            onClick={() => onConfirm(false)}
          >
            Just delete it
          </Button>
        </div>
        <Button
          color='text-red'
          outline='red'
          hover='red'
          size='round-sm'
          className='absolute -top-4'
          onClick={() => onModal(false)}
        >
          <CloseIcon />
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}
