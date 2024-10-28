import { useTextInput } from '@hooks'
import { PlusIcon } from '@components/icons'
import { motion } from 'framer-motion'
import { useTaskStore } from '@features/tasks/store'
import { useRadioStore } from '@features/radio/store'
import { cn } from '@utils/clsxWithTailwindMerge'

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
      className={cn(
        'size-fit rounded-full bg-slate-100 px-2 outline outline-2 outline-blue',
        isRadioOn && 'bg-dark/20 text-slate-100 outline-dark/20 '
      )}
      onSubmit={handleSubmit}
      onBlur={handleCloseInput}
    >
      <input
        className={cn(
          'w-14 bg-transparent text-center font-normal text-dark text-sm outline-none placeholder:text-center placeholder:text-sm',
          isRadioOn && 'placeholder:text-grey'
        )}
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
      className='px-1 text-slate-100'
    >
      <PlusIcon />
    </motion.button>
  )
}
