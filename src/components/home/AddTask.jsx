// import { useState } from 'react'
import { useTaskStore } from '@store'
import { useState } from 'react'
import { useRef } from 'react'
import { GoPlus } from 'react-icons/go'

export const AddTask = () => {
	// const [isAIMode, setIsAIMode] = useState(false)
	const [isInputOpen, setIsInputOpen] = useState(false)
	const newTaskRef = useRef(null)

	const addTask = useTaskStore((state) => state.addTask)
	const taskGroupActive = useTaskStore((state) => state.taskGroupActive)

	const handleSubmit = (e) => {
		e.preventDefault()
		if (newTaskRef.current !== null && newTaskRef.current.value.length > 1) {
			addTask({ task: newTaskRef.current.value, group: taskGroupActive })
			newTaskRef.current.value = ''
		}
	}

	const handleShowInput = (e) => {
		e.preventDefault()
		setIsInputOpen(true)
	}

	const handleCloseInput = (e) => {
		e.preventDefault()
		setIsInputOpen(false)
	}

	return (
		<div className='flex bg-white h-8 text-dark rounded-full absolute bottom-4 left-0 right-0 w-fit mx-auto overflow-hidden first:focus:outline first:focus:outline-blue'>
			{isInputOpen && (
				<form
					onBlur={handleCloseInput}
					onSubmit={handleSubmit}
					className='w-full pl-4 py-1 '
				>
					<input
						className='h-full placeholder:text-sm text-sm focus:outline-none '
						placeholder='What we need to do?'
						type='text'
						name=''
						id=''
						ref={newTaskRef}
					/>
				</form>
			)}
			{/* <button
				className={`my-1 text-white rounded-xl text-xs leading-none shrink-0 w-16 text-center line inline ${!!isAIMode ? 'bg-green' : 'bg-grey'}`}
				onClick={() => setIsAIMode(!isAIMode)}
			>
				{isAIMode ? 'AI Mode' : 'Normal'}
			</button> */}
			<button
				onClick={isInputOpen ? handleSubmit : handleShowInput}
				className='p-1'
			>
				<GoPlus className='mx-auto text-2xl' />
			</button>
		</div>
	)
}
