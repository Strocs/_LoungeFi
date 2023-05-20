import { Button } from '@ui'
import { useState } from 'react'
import { GoPlus } from 'react-icons/go'

const groups = ['All', 'Work', 'Shop', 'House', 'Something', 'Some']

export const TaskGroups = () => {
	const [isActive, setIsActive] = useState('All')

	const onClickGroupButton = button => {
		setIsActive(button)
	}

	return (
		<div className='flex gap-2 w-full my-1'>
			{/* <CreateGroup /> */}
			<button className='text-white'>
				<GoPlus className='h-[19px] w-[19px]' />
			</button>
			<div className='flex gap-3 w-full px-1 overflow-x-scroll py-1 scrollbar-hide'>
				{groups.map(group => (
					<Button
						key={group}
						size='md'
						color={isActive === group ? 'active' : ''}
						onClick={() => onClickGroupButton(group)}
						animated
					>
						{group}
					</Button>
				))}
			</div>
		</div>
	)
}
