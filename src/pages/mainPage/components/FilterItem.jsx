import { useTaskStore } from '@store'

export function FilterItem({ title }) {
	const filter = useTaskStore(state => state.filter)
	const setFilteredTasks = useTaskStore(state => state.setFilteredTasks)

	return (
		<button
			className={`h-min px-4 py-1 border border-c-text border-dashed text-sm text-c-text leading-none hover:bg-c-text hover:text-c-bg ${filter === title ? 'bg-c-text text-c-bg' : ''}`}
			onClick={() => setFilteredTasks(title)}
			type='button'
		>
			{title[0].toUpperCase() + title.slice(1)}
		</button>
	)
}
