import { useTaskStore } from '@store'
import { Button } from '@ui'
import { useState } from 'react'
import { GoPlus } from 'react-icons/go'

export const TaskGroups = () => {
	const taskGroupActive = useTaskStore((state) => state.taskGroupActive)
	const taskGroupList = useTaskStore((state) => state.taskGroupList)
	const setTaskGroupActive = useTaskStore((state) => state.setTaskGroupActive)

	const [isOpenInput, setIsOpenInput] = useState(false)

	return (
		<div className='flex gap-2 w-full my-1'>
			{/* <CreateGroup /> */}
			{isOpenInput ? (
				<form
					name='create-group'
					action=''
					className=''
				>
					<input
						className='w-14 rounded-full h-4'
						type='text'
						name=''
						id=''
					/>
				</form>
			) : (
				<button
					onClick={() => setIsOpenInput(!isOpenInput)}
					className='text-white'
				>
					<GoPlus className='h-[19px] w-[19px]' />
				</button>
			)}
			<div className='flex gap-3 w-full px-1 overflow-x-scroll py-1 scrollbar-hide'>
				{taskGroupList.map((group) => (
					<Button
						key={group}
						size='md'
						color={taskGroupActive === group ? 'active' : ''}
						onClick={() => setTaskGroupActive(group)}
						animated
					>
						{group}
					</Button>
				))}
			</div>
		</div>
	)
}
