import { useDispatch, useSelector } from 'react-redux'
import { deleteDone } from '../../store'
import { CreateTodo, FilterList, TodosList } from './components'

export const TodosPage = () => {
  const { todos = [] } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <main>
      <div className='flex flex-col gap-4 sm:flex-row relative'>
        <FilterList />
        <div className='flex flex-col gap-4 w-full max-w-2xl'>
          <CreateTodo />
          <TodosList items={todos} />
          <div className='flex p-5 justify-between items-center text-sm text-c-gray'>
            <p>{todos.filter(({ done }) => !done).length} items left</p>
            <button
              className='hover:text-c-text'
              type='button'
              onClick={() => dispatch(deleteDone())}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
