import { useTaskStore } from '@store'
import { useRef } from 'react'
import { RiTodoFill } from 'react-icons/ri'

export function CreateTask() {
	const filter = useTaskStore(state => state.filter)
	const addTask = useTaskStore(state => state.addTask)
	const newTaskRef = useRef(null)

	let tag = ''
	if (filter !== 'All' && filter !== 'Done' && filter !== 'Active') {
		tag = filter
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (newTaskRef.current !== null && newTaskRef.current.value.length > 1) {
			addTask({ task: newTaskRef.current.value, tag })
			newTaskRef.current.value = ''
		}
	}

	return (
		<div className='flex items-center gap-5 w-full py-2 px-5 bg-c-box focus-within:outline-dashed focus-within:outline-1 focus-within:outline-c-text'>
			<RiTodoFill className='fill-c-text text-lg' />
			<form className='flex-grow' onSubmit={handleSubmit}>
				<input className='w-full bg-c-box outline-none text-sm text-c-text placeholder:text-c-gray placeholder:font-extralight' type='text' ref={newTaskRef} placeholder='Add a new task' />
			</form>
		</div>
	)
}
