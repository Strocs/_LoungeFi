import { Outlet } from 'react-router-dom'
import { CreateTask, DeleteDones, FilterList, TasksList } from './components'

export const TasksPage = () => {
  return (
    <main className='m-auto w-full'>
      <Outlet />
      <section className='flex flex-col my-6 mx-auto w-full max-w-2xl md:gap-4'>
        {/* <div className='w-full my-4 md:my-auto'> */}
          <FilterList />
          <CreateTask />
          <TasksList />
          <DeleteDones />
        {/* </div> */}
      </section>
    </main>
  )
}
