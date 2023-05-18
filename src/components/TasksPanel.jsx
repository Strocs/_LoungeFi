import { TaskItem } from '@components'

const mockTasks = ['Crear el reproductor Lo-Fi', 'Comenzar la sección de listas', 'Crear el Design System']

export const TasksPanel = () => {
	return (
		<div className='m-4 p-4 text-white rounded-2xl bg-[#00000080] '>
			<ul className='flex flex-col gap-4 h-[22rem] p-1 overflow-y-scroll scrollbar-hide'>
				{mockTasks.map(task => (
					<TaskItem task={task} />
				))}
			</ul>
			<div className='bg-white w-8 h-8 rounded-full mx-auto mt-4'></div>
		</div>
	)
}
