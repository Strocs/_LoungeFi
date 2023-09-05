import { useTaskStore } from '@store'
import { useAddItem } from '@hooks'
import { useState } from 'react'

export const AddTask = () => {
  const addTask = useTaskStore(state => state.addTask)
  const groupActive = useTaskStore(state => state.groupActive)
  const toggleIsWriting = useTaskStore(state => state.toggleIsWriting)
  const [isAI, setIsAI] = useState(false)

  const { ref, handleSubmit } = useAddItem(() => {
    addTask({ task: ref.current.value, group: groupActive })
  })

  return (
    <div
      className={`shadow shadow-blue outline outline-2 ml-2 py-1 pr-2 outline-blue bg-white h-fit text-dark rounded-full first:focus:outline first:focus:outline-blue`}>
      <form
        onSubmit={handleSubmit}
        className='pl-4 w-full h-full overflow-hidden transition-all duration-150 flex items-center justify-between'>
        <input
          name='add-task'
          id='add-task'
          className='h-full w-full placeholder:text-sm text-sm focus:outline-none bg-transparent'
          placeholder={isAI ? 'Let`s generate a list for you!' : 'What we need to do?'}
          autoComplete='off'
          type='text'
          ref={ref}
          onBlur={() => toggleIsWriting(false)}
          onClick={() => toggleIsWriting(true)}
        />
        <button
          onClick={() => setIsAI(!isAI)}
          className={`${
            !isAI ? 'bg-gradient-to-br from-blue to-amber-600 from-30%' : 'bg-darkGrey'
          } text-white text-sm whitespace-nowrap rounded-full px-3 py-[.1rem]`}>
          {!isAI ? 'AI Mode' : 'Normal'}
        </button>
      </form>
    </div>
  )
}
