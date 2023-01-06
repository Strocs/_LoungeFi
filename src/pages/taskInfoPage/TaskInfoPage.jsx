import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDate, getTaskByName } from '../../services'
import { getTaskById } from '../../services/getTaskById'
import { TagBar } from './components'
import { IoClose } from 'react-icons/io5'
export const TaskInfoPage = () => {
  const { tasks = [] } = useSelector(state => state.simpleTask)
  const { pathname, state } = useLocation()
  const navigate = useNavigate()
  const onNavigate = () => navigate('/')

  const { task, notes, done, created, tags, id } = !state
    ? getTaskById(tasks, state)
    : getTaskByName(tasks, pathname)

  const createdDate = formatDate(created)

  return (
    <section className='mt-4 text-c-text w-full max-w-4xl'>
      <h2 className='text-c-text'>{task}</h2>
      <p>Notas: {JSON.stringify(notes)}</p>
      <p>Created: {createdDate}</p>
      <div className='flex items-center gap-2'>
        <p>Tags: </p>
        <TagBar id={id} done={done} created={created} tags={tags} />
      </div>
      <button onClick={onNavigate} className='bg-c-text text-c-bg'>
        Close <IoClose className='inline' />
      </button>
    </section>
  )
}
