import { Outlet } from 'react-router-dom'
import { CreateTodo, DeleteDones, FilterList, TodosList } from './components'

export const TodosPage = () => {
  return (
    <main className='flex gap-16'>
      <section className='flex flex-col my-6 md:flex-row w-full max-w-4xl md:gap-4'>
        <FilterList />
        <div className='w-full my-4 md:my-auto'>
          <CreateTodo />
          <TodosList />
          <DeleteDones />
        </div>
      </section>
      <Outlet />
    </main>
  )
}
