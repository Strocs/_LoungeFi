import { useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTaskStore } from '@store'
import { BsPencilSquare } from 'react-icons/bs'

export function ModifyTask({ task, id }) {
	const [isDisabled, setIsDisabled] = useState(true)
	const editTask = useTaskStore(state => state.editTask)
	const navigate = useNavigate()
	const taskRef = useRef(null)
	useLayoutEffect(() => {
		taskRef.current.value = task
	}, [task])

	const onTaskEdit = e => {
		e.preventDefault()
		if (taskRef.current !== null && taskRef.current.value.length > 1) {
			editTask({ newTask: taskRef.current.value, id })
			setIsDisabled(true)
			const newPath = taskRef.current.value.toLowerCase().replaceAll(' ', '-')
			navigate(`/${newPath}`, { replace: true, state: id })
		}
	}
	const onEdit = () => {
		setIsDisabled(!isDisabled)
		// taskRef.current.disabled = false
		// if (!taskRef.current.disabled) {
		// 	taskRef.current.focus()
		// }
	}

	return (
		<div onClick={onEdit}>
			<form onSubmit={onTaskEdit} className='flex gap-2 items-center'>
				<input
					type='text'
					className={`w-full text-2xl leading-none font-semibold bg-c-bg focus:outline-1 focus:outline-c-text focus:outline-dashed ${isDisabled ? 'cursor-pointer' : ''}`}
					ref={taskRef}
					defaultValue={task}
				/>
				{/* <button type='button' aria-label='Edit this task' onClick={onEdit} className={`${isDisabled ? 'text-c-text' : 'text-green-500'}`}>
				<BsPencilSquare className='text-lg' />
			</button> */}
			</form>
		</div>
	)
}
