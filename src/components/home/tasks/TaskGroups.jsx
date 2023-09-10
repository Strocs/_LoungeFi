import { useTaskStore } from '@store'
import { Button } from '@components/ui'
import { PlusIcon } from '../../icons'
import { useAddItem } from '@hooks'
import { FILTER_ITEMS } from '@constants'

export const TaskGroups = () => {
  const groupActive = useTaskStore(state => state.groupActive)
  const groupList = useTaskStore(state => state.groupList)
  const setGroupActive = useTaskStore(state => state.setGroupActive)
  const addGroup = useTaskStore(state => state.addGroup)
  const deleteGroup = useTaskStore(state => state.deleteGroup)

  const { isInputOpen, ref, handleSubmit, handleShowInput, handleCloseInput } = useAddItem(() => {
    addGroup({ group: ref.current.value })
  })

  return (
    <div className='flex gap-2 w-full items-center'>
      <div className='flex gap-3  w-full pr-1 pl-[10px] py-1'>
        {groupList.map(group => {
          const isDeletable = !Object.values(FILTER_ITEMS).includes(group)
          return (
            <Button
              key={group}
              color={groupActive === group ? 'blue' : 'white'}
              outline={groupActive === group ? 'white' : 'blue'}
              hover='blue'>
              <span className='w-full h-fit px-2 text-sm' onClick={() => setGroupActive(group)}>
                {group}
              </span>
              {isDeletable && (
                <span
                  onClick={() => deleteGroup({ group })}
                  className='md:hidden group-hover:inline-block transition-[display] duration-150 text-xs hover:text-red pr-2'>
                  ✖
                </span>
              )}
            </Button>
          )
        })}
      </div>
      {isInputOpen ? (
        <form
          name='create-group'
          className='w-fit h-fit outline outline-2 px-2 outline-blue rounded-full bg-white'
          onSubmit={handleSubmit}
          onBlur={handleCloseInput}>
          <input
            className='placeholder:text-xs text-dark placeholder:text-center text-center font-medium text-sm w-14 outline-none'
            type='text'
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
