import { useTaskStore } from '@store'
import { useAddItem } from '@hooks'
import { PlusIcon } from '../icons'

export const AddTask = () => {
  const addTask = useTaskStore(state => state.addTask)
  const groupActive = useTaskStore(state => state.groupActive)
  const toggleIsWriting = useTaskStore(state => state.toggleIsWriting)

  const { ref, handleSubmit } = useAddItem(() => {
    addTask({ task: ref.current.value, group: groupActive })
  })

  return (
    <div
      className={`shadow shadow-blue outline outline-2 ml-2 py-[.2rem] pr-1 outline-blue bg-white h-fit text-dark rounded-full first:focus:outline first:focus:outline-blue`}>
      <form
        onSubmit={handleSubmit}
        className='pl-4 w-full h-full overflow-hidden transition-all duration-150 flex items-center justify-between'>
        <input
          name='add-task'
          id='add-task'
          className='h-full w-full placeholder:text-sm text-sm focus:outline-none bg-transparent'
          placeholder='What we need to do?'
          autoComplete='off'
          type='text'
          ref={ref}
          onBlur={() => toggleIsWriting(false)}
          onClick={() => toggleIsWriting(true)}
        />
        <button>
          <PlusIcon />
        </button>
      </form>
    </div>
  )
}
