import { useTaskStore } from '@store'

export function FilterItem({ title }) {
	const filter = useTaskStore(state => state.filter)
	const setFilteredTasks = useTaskStore(state => state.setFilteredTasks)
	console.log(filter, title)
	return (
		<button
			className={`min-h-min px-2 py-1 min-w-max rounded-full text-xs bg-zinc-800 text-c-text leading-none hover:bg-zinc-200 hover:text-c-bg ${filter === title ? 'text-zinc-900 bg-zinc-300' : ''}`}
			onClick={() => setFilteredTasks(title)}
			type='button'
		>
			<p className='inline-block'>{title[0].toUpperCase() + title.slice(1)}</p>
		</button>
	)
}
