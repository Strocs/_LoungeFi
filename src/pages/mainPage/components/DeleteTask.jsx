import { useTaskStore } from '@store'
import { IoClose } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'

export function DeleteTask({ id }) {
	const removeTask = useTaskStore(state => state.removeTask)
	const { state } = useLocation()
	const navigate = useNavigate()

	const onDelete = () => {
		removeTask(id)
		if (state === id) {
			navigate('/')
		}
	}
	return (
		<button type='button' aria-label='Delete task' className='opacity-100 lg:opacity-40 hover:opacity-100' onClick={onDelete}>
			<IoClose className='fill-c-text text-xl hover:fill-c-red' />
		</button>
	)
}
