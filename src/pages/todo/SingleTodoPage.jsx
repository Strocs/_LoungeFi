import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getTaskById } from '../../services/getTaskById'
import { TagBar } from './components'

export const SingleTodoPage = () => {
  const { todos = [] } = useSelector(state => state.todos)
  const { state } = useLocation()
  const { todo, notes, done, created, tags, id } = getTaskById(todos, state)

  return (
    <section className='mt-4'>
      {/* //TODO: Poder cambiar el texto del todo */}
      <h1 className='text-c-text'>{todo}</h1>
      {/* //TODO: Mostrar las notas */}
      {/* //TODO: Mostrar la fecha de creación */}
      {/* //TODO: Mostrar los tags */}
      <TagBar id={id} done={done} created={created} tags={tags} />
    </section>
  )
}
