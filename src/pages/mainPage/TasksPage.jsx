import { Outlet } from 'react-router-dom'
import { CreateTask, DeleteDones, FilterList, TasksList } from './components'

export function TasksPage() {
	return (
		<>
			<Outlet />
			<main className='m-auto w-full'>
				<FilterList />
				<section className='mx-4 h-[26rem] rounded-xl'>
					<div className='grid gap-2 px-4'>
						<CreateTask />
						<div className='overflow-y-scroll scroll h-80'>
							<TasksList />
						</div>
					</div>
					{/* <DeleteDones /> */}
				</section>
				<div className='flex mx-8 justify-between mt-4'>
					<div className='h-20 bg-zinc-800 w-20 rounded-lg'></div>
					<div className='h-20 bg-zinc-800 w-20 rounded-lg'></div>
					<div className='h-20 bg-zinc-800 w-20 rounded-lg'></div>
				</div>
			</main>
		</>
	)
}
