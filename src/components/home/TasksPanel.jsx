import { TaskItem } from '.'
import { GoPlus } from 'react-icons/go'

const mockTasks = ['Crear el reproductor Lo-Fi', 'Comenzar la sección de listas', 'Crear el Design System']

export const TasksPanel = () => {
	return (
		<div className='flex flex-col my-4 h-full text-white rounded-2xl bg-opacitydark'>
			<ul className='flex flex-col h-full gap-4 p-6 overflow-y-scroll scrollbar-hide'>
				{mockTasks.map(task => (
					<TaskItem task={task} />
				))}
			</ul>
			<button className='bg-white text-dark w-10 h-10 rounded-full my-4 mx-auto flex-shrink-0'>
				<GoPlus className='m-auto h-8 w-8' />
			</button>
		</div>
	)
}
