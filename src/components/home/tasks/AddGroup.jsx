import { useAddItem } from '@hooks'
import { useTaskStore } from '@store'
import { PlusIcon } from '@components/icons'
import { motion } from 'framer-motion'

export const AddGroup = () => {
  const createGroup = useTaskStore(state => state.createGroup)

  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    },
    closed: {
      opacity: 0
    }
  }

  const { isInputOpen, ref, handleSubmit, handleShowInput, handleCloseInput } = useAddItem(
    group => {
      createGroup({ group })
    }
  )

  return isInputOpen ? (
    <motion.form
      variants={variants}
      initial='closed'
      animate='open'
      name='create-group'
      className='w-fit h-fit outline outline-2 px-2 outline-blue rounded-full bg-white'
      onSubmit={handleSubmit}
      onBlur={handleCloseInput}>
      <input
        className='placeholder:text-xs text-dark placeholder:text-center text-center font-medium text-sm w-14 outline-none'
        type='text'
        ref={ref}
      />
      <button type='submit' className='none' />
    </motion.form>
  ) : (
    <motion.button
      variants={variants}
      initial='closed'
      animate='open'
      onClick={handleShowInput}
      className='text-white px-1'>
      <PlusIcon />
    </motion.button>
  )
}