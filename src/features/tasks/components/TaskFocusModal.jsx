import { EditIcon } from '@components/icons'
import { Button } from '@components/ui'
import { useTaskStore } from '@context/useTaskStore'
import { DeleteTaskButton, DoneTaskButton, TasksWrapper } from '@features/tasks'
import { useTextInput } from '@hooks/useTextInput'
import { formatDate } from '@utils/formatDate'
import { getTaskById } from '@utils/getTaskById'

export const TaskFocusModal = () => {
  const { id, group } = useTaskStore(state => state.taskActive)
  const setOpenFocusModal = useTaskStore(state => state.setOpenFocusModal)
  const updateTask = useTaskStore(state => state.updateTask)

  const { task, created, done } = getTaskById({ group, id })

  const createdDate = formatDate(created)

  const { ref, handleSubmit, isInputOpen, handleShowInput, handleCloseInput } = useTextInput(
    value => {
      updateTask({ id, group, newTask: value })
    },
    false
  )
  const handleCloseModal = () => {
    setOpenFocusModal({ isOpen: false })
  }

  const toggleUpdateTask = e => {
    if (isInputOpen) {
      handleCloseInput(e)
    } else {
      handleShowInput(e)
    }
  }

  const handleOnSubmit = e => {
    handleSubmit(e)
    handleCloseInput(e)
  }

  return (
    <TasksWrapper>
      <div className='flex flex-col items-center justify-center gap-6 h-full font-extralight text-center'>
        <div>
          <p className='font-medium'>Now Focus on:</p>
          {isInputOpen ? (
            <form onSubmit={handleOnSubmit}>
              <input
                type='text'
                name=''
                id=''
                ref={ref}
                defaultValue={task}
                className='bg-blue bg-opacity-20 text-3xl w-fit text-center rounded-full px-3'
              />
            </form>
          ) : (
            <h2 className='text-3xl'>{task}</h2>
          )}
        </div>
        <p className='text-sm'>
          <b> {done ? 'Completed' : 'In Progress'}</b>
        </p>
        <div className='flex gap-6'>
          <DoneTaskButton id={id} done={done} group={group} />
          <Button
            size='round-sm'
            color='text-blue'
            outline='blue'
            hover='blue'
            onClick={toggleUpdateTask}>
            <EditIcon size={16} />
          </Button>
          <DeleteTaskButton id={id} group={group} />
        </div>
        <div>
          <p className='text-sm'>
            <b> Group:</b> {group}
          </p>
          <p className='text-sm'>
            <b> Created:</b> {createdDate}
          </p>
        </div>
        <Button
          size='md'
          color='white'
          outline='grey'
          shadow='grey'
          hover='grey'
          onClick={handleCloseModal}>
          Return
        </Button>
      </div>
    </TasksWrapper>
  )
}
