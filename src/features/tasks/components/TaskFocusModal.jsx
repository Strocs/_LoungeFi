import { EditIcon } from '@components/icons'
import { Button } from '@components/ui'
import { useTaskStore } from '@features/tasks/store'
import { DeleteTaskButton, DoneTaskButton } from '@features/tasks/components'
import { useTextInput } from '@hooks/useTextInput'
import { formatDate } from '@utils/formatDate'
import { getTaskById } from '@utils/getTaskById'
import { TasksWrapper } from '@features/tasks/layout'
import { cn } from '@utils/clsxWithTailwindMerge'

export const TaskFocusModal = () => {
  const { id, group } = useTaskStore((state) => state.taskActive)
  const setOpenFocusModal = useTaskStore((state) => state.setOpenFocusModal)
  const updateTask = useTaskStore((state) => state.updateTask)

  const { task, created, done } = getTaskById({ group, id })

  const createdDate = formatDate(created)

  const { ref, handleSubmit, isInputOpen, handleShowInput, handleCloseInput } = useTextInput((value) => {
    updateTask({ id, group, newTask: value })
  }, false)

  const handleCloseModal = () => {
    setOpenFocusModal({ isOpen: false })
  }

  const toggleUpdateTask = (e) => {
    if (isInputOpen) {
      handleCloseInput(e)
    } else {
      handleShowInput(e)
    }
  }

  const handleOnSubmit = (e) => {
    handleSubmit(e)
    handleCloseInput(e)
  }

  return (
    <TasksWrapper>
      <div className='flex h-full flex-col items-center justify-center gap-6 text-center font-extralight'>
        <div>
          <p className='font-medium'>{isInputOpen ? 'Updating:' : 'Now focusing on:'}</p>
          {isInputOpen ? (
            <form onSubmit={handleOnSubmit}>
              <input
                type='text'
                name=''
                id=''
                ref={ref}
                defaultValue={task}
                className='w-fit rounded-full bg-dark/40 bg-opacity-20 px-3 text-center font-bold text-3xl outline-dashed outline-2 outline-dark/60'
              />
            </form>
          ) : (
            <h2 className='font-bold text-3xl'>{task}</h2>
          )}
        </div>
        <p className='text-sm'>
          <b> {done ? 'Completed' : 'In Progress'}</b>
        </p>
        <div className='flex gap-6'>
          <DoneTaskButton id={id} done={done} group={group} />
          <Button
            size='round-sm'
            color={isInputOpen ? 'blue' : 'text-blue'}
            outline='blue'
            hover='blue'
            className={cn('transition-transform duration-150', isInputOpen && 'scale-125')}
            onClick={toggleUpdateTask}
          >
            <EditIcon size={16} />
          </Button>
          <DeleteTaskButton id={id} group={group} />
        </div>
        <div>
          <p className='text-sm'>
            <b> Group:</b> {group}
          </p>
          <p className='text-sm'>
            <b> Created at:</b> {createdDate}
          </p>
        </div>
        <Button size='md' color='grey' outline='none' hover='grey' className='font-normal' onClick={handleCloseModal}>
          Return
        </Button>
      </div>
    </TasksWrapper>
  )
}
