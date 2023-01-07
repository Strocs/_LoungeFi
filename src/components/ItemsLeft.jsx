import { useSelector } from 'react-redux'

export function ItemsLeft () {
  const { tasks = [] } = useSelector(state => state.simpleTask)
  const tasksLeft = tasks.filter(({ done }) => !done).length
  return <p className='text-sm text-c-gray'>{tasksLeft} items left</p>
}
