import { useTextInput } from '@hooks'
import { useTaskStore } from '@context'
import { PlusIcon } from '@components/icons'
import { motion } from 'framer-motion'

export const CreateGroup = () => {
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

  const { isInputOpen, ref, handleSubmit, handleShowInput, handleCloseInput } =
    useTextInput(group => {
      createGroup({ group })
    })

  return isInputOpen ? (
    <motion.form
      variants={variants}
      initial='closed'
      animate='open'
      name='create-group'
      className='w-fit h-fit outline outline-2 px-2 outline-blue rounded-full bg-slate-100'
      onSubmit={handleSubmit}
      onBlur={handleCloseInput}
    >
      <input
        className='placeholder:text-sm text-dark placeholder:text-center text-center font-normal text-sm w-14 outline-none'
        placeholder='Group'
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
      className='text-slate-100 px-1'
    >
      <PlusIcon />
    </motion.button>
  )
}
