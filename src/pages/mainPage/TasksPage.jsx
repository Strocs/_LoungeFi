import { Outlet } from 'react-router-dom'
import { CreateTask, DeleteDones, FilterList, TasksList } from './components'

export const TasksPage = () => {
  return (
    <main className='flex gap-16'>
      <section className='flex flex-col my-6 md:flex-row w-full max-w-4xl md:gap-4'>
        <FilterList />
        <div className='w-full my-4 md:my-auto'>
          <CreateTask />
          <TasksList />
          <DeleteDones />
        </div>
      </section>
      <Outlet />
    </main>
  )
}
