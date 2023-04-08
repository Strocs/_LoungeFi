import { useTaskStore } from '@store'
import { useLocation, useNavigate } from 'react-router-dom'

export function DeleteDones() {
	const tasks = useTaskStore(state => state.tasks)
	const deleteDones = useTaskStore(state => state.deleteDones)
	const donesTaskId = tasks.map(task => task.done && task.id)
	const { state } = useLocation()
	const navigate = useNavigate()

	const onDelete = () => {
		deleteDones()
		if (!!state && donesTaskId.includes(state)) {
			navigate('/')
		}
	}

	return (
		<div className='flex justify-end text-sm text-c-red'>
			<button className='p-2 leading-none hover:bg-c-red hover:text-white focus:bg-c-bg focus:text-c-red' type='button' onClick={onDelete}>
				<b>Delete</b> All Tasks Dones
			</button>
		</div>
	)
}
