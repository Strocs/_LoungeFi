import { useTaskStore } from '@store'
import { TaskItem } from '.'

export function TasksList() {
	const filteredTasks = useTaskStore(state => state.filteredTasks)
	return (
		<ul className='grid gap-1'>
			{filteredTasks.map(({ task, done, id, tags, created }) => (
				<TaskItem key={id} text={task} done={done} id={id} tags={tags} created={created} />
			))}
		</ul>
	)
}
