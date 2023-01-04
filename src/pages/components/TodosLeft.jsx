import { useSelector } from 'react-redux'

export const TodosLeft = () => {
  const { todos = [] } = useSelector(state => state.todos)
  const todosLeft = todos.filter(({ done }) => !done).length
  return <p className='text-sm text-c-gray'>{todosLeft} items left</p>
}
