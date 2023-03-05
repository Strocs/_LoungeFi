import { Outlet } from 'react-router-dom'
import { CreateTask, DeleteDones, FilterList, TasksList } from './components'

export function TasksPage() {
	return (
		<>
				<Outlet />
			<main className='m-auto w-full'>
				<section className='flex flex-col gap-4 mb-6 mx-auto w-full max-w-2xl px-4'>
					{/* <FilterList /> */}
					<CreateTask />
					<TasksList />
					{/* <DeleteDones /> */}
				</section>
			</main>
		</>
	)
}
