import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useGetTasks } from '@hooks'
import {
  CreateNote,
  CreationDate,
  ModifyTask,
  // Pomodoro,
  TagBar,
  TaskInfoButton
} from './components'

export function TaskInfoPage () {
  const { pathname, state } = useLocation()
  const { singleTask } = useGetTasks(state, pathname)
  if (!singleTask) return <Navigate to='/' />
  const { task, note, done, created, tags, id } = singleTask

  const navigate = useNavigate()
  const onNavigate = () => navigate('/')

  return (
    <div className='flex flex-col gap-3 mx-auto mb-4 text-c-text w-full  sm:max-w-2xl pt-4 pb-6 px-5 bg-c-box'>
      <ModifyTask task={task} id={id} />
      <CreationDate created={created} />
      <div className='flex items-center gap-2'>
        <p className='font-light'>Tags: </p>
        <TagBar id={id} done={done} created={created} tags={tags} />
      </div>
      <CreateNote id={id} note={note} />
      <div className='flex gap-3'>
        <TaskInfoButton text='Pomodoro (soon)' onClick={() => {}} />
        <TaskInfoButton text='Close' onClick={onNavigate} />
      </div>

      {/* <Pomodoro id={id} /> */}
    </div>
  )
}
