import { useTaskStore } from '@store'
import { useAddItem } from '@hooks'
import { PlusIcon } from '@components/icons'

export const AddTask = () => {
  const addTask = useTaskStore(state => state.addTask)
  const groupActive = useTaskStore(state => state.groupActive)

  const { ref, isInputOpen, handleSubmit, handleCloseInput, handleShowInput } = useAddItem(() => {
    addTask({ task: ref.current.value, group: groupActive })
  })

  return (
    <div className='flex bg-white h-8 w-fit text-dark rounded-full absolute bottom-4 left-0 right-0 mx-auto first:focus:outline first:focus:outline-blue'>
      {isInputOpen && (
        <form
          onBlur={handleCloseInput}
          onSubmit={handleSubmit}
          className='pl-4 py-1 w-full overflow-hidden transition-all duration-150'>
          <input
            className='h-full placeholder:text-sm text-sm focus:outline-none '
            placeholder='What we need to do?'
            name='create-task'
            autoComplete='off'
            type='text'
            ref={ref}
          />
        </form>
      )}
      <button onClick={isInputOpen ? handleSubmit : handleShowInput} className='p-1'>
        <PlusIcon />
      </button>
    </div>
  )
}
