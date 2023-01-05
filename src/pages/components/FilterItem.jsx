import { useDispatch, useSelector } from 'react-redux'
import { setFilteredTasks } from '../../store'

export const FilterItem = ({ title }) => {
  const { filter } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <button
      className={`h-min px-4 py-1 border border-c-text border-dashed text-sm text-c-text leading-none hover:bg-c-text hover:text-c-bg ${
        filter === title ? 'bg-c-text text-c-bg' : ''
      }`}
      type='button'
      onClick={() => dispatch(setFilteredTasks(title))}
    >
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}
