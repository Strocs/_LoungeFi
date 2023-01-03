import { useDispatch, useSelector } from 'react-redux'
import { deleteDone } from '../../store'
import { CreateTodo, FilterList, TodosList } from './components'

export const TodosPage = () => {
  const { todos = [] } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <main className='w-full h-full max-w-2xl flex flex-col justify-between gap-4 sm:flex-row relative'>
      <div className='w-full'>
        <CreateTodo />
        <div className='rounded-md shadow-xl overflow-hidden'>
          <TodosList items={todos} />
          <div className='flex bg-primary-light dark:bg-primary-dark p-5 justify-between items-center text-sm text-placeholder-dark dark:text-placeholder-light'>
            <p className='text-placeholder-dark'>
              {todos.filter(({ done }) => !done).length} items left
            </p>
            <button
              className='text-placeholder-dark dark:text-placeholder-dark hover:text-primary-dark dark:hover:text-primary-light'
              type='button'
              onClick={() => dispatch(deleteDone())}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
      <div className='py-2 px-1 sm:max-w-[7rem] mb-[5.25rem]'>
        <FilterList />
      </div>
    </main>
  )
}
