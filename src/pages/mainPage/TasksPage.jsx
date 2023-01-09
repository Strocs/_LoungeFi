import { Outlet } from 'react-router-dom'
import { CreateTask, DeleteDones, FilterList, TasksList } from './components'

export function TasksPage () {
  return (
    <>
      <main className='m-auto w-full'>
        <section className=' w-full bg-c-bg/50 h-full right-0 left-0 backdrop-blur-sm'>
          <Outlet />
        </section>

        <section className='flex flex-col gap-4 mb-6 mx-auto w-full max-w-2xl'>
          <FilterList />
          <CreateTask />
          <TasksList />
          <DeleteDones />
        </section>
      </main>
    </>
  )
}
