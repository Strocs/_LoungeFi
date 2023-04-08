import { useTaskStore } from '@store'
import { useRef, useState } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'

export function CreateTask() {
	const [isActive, setIsActive] = useState(false)
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
		<div className='flex gap-4 items-center justify-end'>
			<form className={`${isActive ? 'w-full' : 'w-0'} flex items-center gap-4 bg-c-box rounded-full overflow-hidden transition-all duration-200 ease-in`} onSubmit={handleSubmit}>
				<input className='w-full bg-c-box outline-none text-xs text-c-text px-4 py-1' type='text' ref={newTaskRef} />
			</form>
			<BsPlusCircleFill className='flex-shrink-0 fill-c-text text-lg w-6 h-6 cursor-pointer' onClick={() => setIsActive(!isActive)} />
		</div>
	)
}
