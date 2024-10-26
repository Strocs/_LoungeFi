import { useTextInput } from '@hooks'
import { PlusIcon } from '@components/icons'
import { motion } from 'framer-motion'
import { useTaskStore } from '@features/tasks/store'
import { useRadioStore } from '@features/radioPlayer/store'
import clsx from 'clsx'

export const CreateGroup = () => {
  const createGroup = useTaskStore((state) => state.createGroup)
  const isRadioOn = useRadioStore((state) => state.isRadioOn)

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

  const { isInputOpen, ref, handleSubmit, handleShowInput, handleCloseInput } = useTextInput((group) => {
    createGroup({ group })
  })

  return isInputOpen ? (
    <motion.form
      variants={variants}
      initial='closed'
      animate='open'
      name='create-group'
      className={clsx('size-fit outline outline-2 px-2 rounded-full', {
        'bg-dark/20 text-slate-100 outline-dark/20 ': isRadioOn,
        'outline-blue bg-slate-100': !isRadioOn
      })}
      onSubmit={handleSubmit}
      onBlur={handleCloseInput}
    >
      <input
        className={`placeholder:text-sm placeholder:text-center text-center font-normal text-sm w-14 outline-none bg-transparent ${isRadioOn ? 'placeholder:text-grey' : 'text-dark'
          }`}
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
