import { useTaskStore } from '@store'
import { AddTask, TaskItem } from '.'

export const TasksPanel = () => {
	const tasksActivesList = useTaskStore((state) => state.tasksActivesList)
	return (
		<section
			aria-label='tasks-panel'
			className=' my-4 grow text-white rounded-2xl relative'
		>
			<ul
				aria-label='tasks-list'
				className='flex flex-col gap-4 p-6 h-[85%] overflow-y-scroll scrollbar-hide'
			>
				{tasksActivesList.map((task) => (
					<TaskItem
						key={task.id}
						id={task.id}
						task={task.task}
						done={task.done}
					/>
				))}
			</ul>
			<AddTask />
		</section>
	)
}
