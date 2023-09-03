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
    <div className='flex gap-2 w-full items-center'>
      <div className='flex gap-3 w-full px-1 py-1'>
        {groupList.map(group => (
          <Button
            key={group}
            padding
            size='md'
            outline
            color={groupActive === group ? 'active' : 'primary'}
            onClick={() => setGroupActive(group)}>
            {group}
          </Button>
        ))}
      </div>
      {isInputOpen ? (
        <form
          name='create-group'
          className='h-fit'
          onSubmit={handleSubmit}
          onBlur={handleCloseInput}>
          <input
            className='w-14 rounded-full placeholder:text-xs px-2 h-6 text-sm'
            type='text'
            placeholder='Group'
            ref={ref}
          />
        </form>
      ) : (
        <button onClick={handleShowInput} className='text-white px-1'>
          <PlusIcon />
        </button>
      )}
    </div>
  )
}
