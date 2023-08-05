import { AddTask, TaskItem } from '.'

const mockTasks = ['Crear el reproductor Lo-Fi', 'Comenzar la sección de listas', 'Crear el Design System']

export const TasksPanel = () => {
	return (
		<section aria-label='tasks-panel' className=' my-4 grow text-white rounded-2xl bg-opacitydark relative'>
			<ul aria-label='tasks-list' className='flex flex-col gap-4 p-6 h-[85%] overflow-y-scroll scrollbar-hide'>
				{mockTasks.map(task => (
					<TaskItem
						key={task}
						task={task}
					/>
				))}
			</ul>
			<AddTask />
		</section>
	)
}
