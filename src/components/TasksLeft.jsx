import { useTaskStore } from '@store'

export function TasksLeft() {
	const tasks = useTaskStore(state => state.tasks)
	const tasksLeft = tasks.filter(({ done }) => !done).length
	return (
		<p className='text-sm text-c-gray'>
			{tasksLeft} {tasksLeft === 1 ? 'task' : 'tasks'} left
		</p>
	)
}
