import { EditIcon } from '@components/icons'
import { Button } from '@components/ui'
import { StepsList } from '@features/pomodoro/components'
import { usePomodoro } from '@features/pomodoro/hooks'
import { DeleteTaskButton, DoneTaskButton } from '@features/tasks/components'
import { TasksWrapper } from '@features/tasks/layout'
import { useTaskStore } from '@features/tasks/store'
import { useTextInput } from '@hooks/useTextInput'
import { cn } from '@utils/clsxWithTailwindMerge'
import { formatDate } from '@utils/formatDate'
import { formatTime } from '@utils/formatTime'
import { getTaskById } from '@utils/getTaskById'

export const TaskFocusModal = () => {
  const { id, group } = useTaskStore((state) => state.taskActive)
  const setFocused = useTaskStore((state) => state.setFocused)
  const updateTask = useTaskStore((state) => state.updateTask)
  const setNote = useTaskStore((state) => state.setNote)

  const { task, created, note, done } = getTaskById({ group, id })

  const createdDate = formatDate(created)

  const updateInput = useTextInput((value) => {
    updateTask({ id, group, newTask: value })
  }, false)

  const notesInput = useTextInput((value) => {
    setNote({ id, group, note: value })
  }, false)

  const handleCloseModal = () => {
    setFocused({ isFocused: false })
  }

  const toggleUpdateTask = (e) => {
    if (updateInput.isInputOpen) {
      updateInput.handleCloseInput(e)
    } else {
      updateInput.handleShowInput(e)
    }
  }

  const handleOnSubmit = (e, input) => {
    input.handleSubmit(e)
    input.handleCloseInput(e)
  }


  const { minutes, seconds, togglePomodoro, isStart } = usePomodoro()

  return (
    <TasksWrapper>
      <div className='flex h-full flex-col items-center justify-center gap-6 text-center font-extralight'>
        <section className='space-y-4'>
          <p
            className={cn(
              'font-bold text-8xl text-white leading-[0.7] transition-opacity duration-150',
              !isStart && 'opacity-50'
            )}
          >
            {formatTime(minutes) + ':' + formatTime(seconds)}
          </p>
          <StepsList size='md' />
          <button
            className={cn('rounded-md bg-black/20 px-2 py-0.5 font-normal hover:bg-black/40', !isStart && 'bg-green')}
            onClick={togglePomodoro}
          >
            {isStart ? 'Stop' : 'Start'}
          </button>
        </section>
        <div>
          <p className='font-medium'>{updateInput.isInputOpen ? 'Updating:' : 'Now focusing on:'}</p>
          {updateInput.isInputOpen ? (
            <form onSubmit={(e) => handleOnSubmit(e, updateInput)}>
              <input
                type='text'
                name=''
                id=''
                ref={updateInput.ref}
                defaultValue={task ?? ''}
                className='w-fit rounded-full bg-dark/40 bg-opacity-20 px-3 text-center font-bold text-3xl outline-dashed outline-2 outline-dark/60'
              />
            </form>
          ) : (
            <h2 className='font-bold text-3xl'>{task}</h2>
          )}
        </div>
        <textarea onBlur={(e) => handleOnSubmit(e, notesInput)} onClick={notesInput.handleShowInput} ref={notesInput.ref} defaultValue={note ?? ''} className='[field-sizing:content] w-full max-w-sm rounded-md bg-transparent resize-none text-sm text-white/80 placeholder:text-white/60 placeholder:text-center placeholder:hover:text-white' placeholder='Add a note'></textarea>
        <p className='text-sm'>
          <b> {done ? 'Completed' : 'In Progress'}</b>
        </p>
        <div className='flex gap-6'>
          <DoneTaskButton id={id} done={done} group={group} />
          <Button
            size='round-sm'
            color={updateInput.isInputOpen ? 'blue' : 'text-blue'}
            outline='blue'
            hover='blue'
            className={cn('transition-transform duration-150', updateInput.isInputOpen && 'scale-125')}
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
