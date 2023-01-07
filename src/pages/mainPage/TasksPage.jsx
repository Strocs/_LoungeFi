import { Outlet } from 'react-router-dom'
import { CreateTask, DeleteDones, FilterList, TasksList } from './components'

export function TasksPage () {
  return (
    <main className='m-auto w-full'>
      <Outlet />
      <section className='flex flex-col gap-4 my-6 mx-auto w-full max-w-2xl'>
        <FilterList />
        <CreateTask />
        <TasksList />
        <DeleteDones />
      </section>
    </main>
  )
}
