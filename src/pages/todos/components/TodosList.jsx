import { useSelector } from 'react-redux'
import { TodoItem } from '.'

export const TodosList = () => {
  const { filteredTasks = [] } = useSelector(state => state.todos)
  return (
    <ul className='my-4'>
      {filteredTasks.map(({ todo, done, id, tags, created }) => (
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
