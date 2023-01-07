import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useGetTasks } from '@hooks'
import {
  CreateNote,
  CreationDate,
  ModifyTask,
  PomodoroCountdown,
  PomodoroSetTimer,
  TagBar,
  TaskInfoButton
} from './components'
import { PomodoroButton } from './components/PomodoroButton'

export function TaskInfoPage () {
  const [isPomoActive, setIsPomoActive] = useState(false)
  const [start, setStart] = useState(false)
  const navigate = useNavigate()
  const onNavigate = () => navigate('/')
  const { pathname, state } = useLocation()
  const singleTask =
    state !== null
      ? useGetTasks({ byId: state })
      : useGetTasks({ byName: pathname })

  if (!singleTask) return <Navigate to='/' />

  const { task, notes, done, created, tags, id } = singleTask

  const onSetPomodoro = () => setIsPomoActive(true)

  return (
    <section className='flex flex-col gap-3 mx-auto mb-4 text-c-text w-full max-w-2xl pt-4 pb-6 px-5 bg-c-box'>
      <ModifyTask task={task} id={id} />
      <CreationDate created={created} />
      <div className='flex items-center gap-2'>
        <p className='font-extralight'>Tags: </p>
        <TagBar id={id} done={done} created={created} tags={tags} />
      </div>
      <CreateNote />
      <div className='flex w-full gap-3'>
        {/* TODO: Add pomodoro feat */}
        <PomodoroButton
          isActive={isPomoActive}
          start={start}
          setStart={setStart}
          onSetPomodoro={onSetPomodoro}
        />
        <TaskInfoButton text='Close' onClick={onNavigate} />
      </div>
      {isPomoActive && !start && <PomodoroSetTimer />}
      {start && <PomodoroCountdown />}
    </section>
  )
}
