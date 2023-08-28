import { useTaskStore } from '@store'
import { Button } from '@components/ui'
import { PlusIcon } from '../icons'
import { useAddItem } from '@hooks'

export const TaskGroups = () => {
  const groupActive = useTaskStore(state => state.groupActive)
  const groupList = useTaskStore(state => state.groupList)
  const setGroupActive = useTaskStore(state => state.setGroupActive)
  const addGroup = useTaskStore(state => state.addGroup)

  const { isInputOpen, ref, handleSubmit, handleShowInput, handleCloseInput } = useAddItem(() => {
    addGroup({ group: ref.current.value })
  })

  return (
    <div className='flex gap-2 w-full my-1 items-center'>
      {isInputOpen ? (
        <form name='create-group' className='h-fit' onSubmit={handleSubmit} onBlur={handleCloseInput}>
          <input
            className='w-14 rounded-full placeholder:text-xs px-2 h-6 text-sm'
            type='text'
            name=''
            id=''
            placeholder='Group'
            ref={ref}
          />
        </form>
      ) : (
        <button onClick={handleShowInput} className='text-white'>
          <PlusIcon />
        </button>
      )}
      <div className='flex gap-3 w-full px-1 overflow-x-scroll py-1 scrollbar-hide'>
        {groupList.map(group => (
          <Button
            key={group}
            size='md'
            color={groupActive === group ? 'active' : ''}
            onClick={() => setGroupActive(group)}>
            {group}
          </Button>
        ))}
      </div>
    </div>
  )
}
