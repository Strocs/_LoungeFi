import { useTaskStore } from '@store'
import { useAddItem } from '@hooks'
import { PlusIcon } from '@components/icons'

export const AddTask = () => {
  const addTask = useTaskStore(state => state.addTask)
  const groupActive = useTaskStore(state => state.groupActive)

  const { ref, handleSubmit } = useAddItem(() => {
    addTask({ task: ref.current.value, group: groupActive })
  })

  return (
    <div className='shadow shadow-blue flex bg-white h-8 text-dark rounded-full first:focus:outline first:focus:outline-blue'>
        <form
          name='create-task'
          onSubmit={handleSubmit}
          className='pl-4 py-1 w-full overflow-hidden transition-all duration-150'>
          <input
            className='h-full placeholder:text-sm text-sm focus:outline-none '
            placeholder='What we need to do?'
            // autoComplete='off'
            type='text'
            ref={ref}
          />
        </form>
      <button onClick={handleSubmit} className='p-1'>
        <PlusIcon />
      </button>
    </div>
  )
}
