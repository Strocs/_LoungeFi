import { useSelector } from 'react-redux'
import { TodoItem } from '.'

export const TodosList = () => {
  const { todos = [] } = useSelector(state => state.todos)
  return (
    <ul className='my-4'>
      {todos.map(({ todo, done, id, tags, created }) => (
        <TodoItem
          key={todo}
          text={todo}
          done={done}
          id={id}
          tags={tags}
          created={created}
        />
      ))}
    </ul>
  )
}
