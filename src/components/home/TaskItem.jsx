import { Button } from '@ui'
import { HiOutlineTrash } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'

export const TaskItem = ({ task }) => {
	return (
		<li className='flex items-center gap-2'>
			<Button
				border='thick'
				color='transparent'
				padding='none'
			>
				<TiTick />
			</Button>
			<p className='leading-none text-sm w-full'>{task}</p>
			<div className='flex items-center'>
				<Button
					color='danger'
					padding='none'
				>
					<HiOutlineTrash className='h-4 w-4' />
				</Button>
				<div className='flex flex-col gap-1 items-end w-4 cursor-grab'>
					<span className='w-[2px] h-[2px] rounded-full bg-white' />
					<span className='w-[2px] h-[2px] rounded-full bg-white' />
					<span className='w-[2px] h-[2px] rounded-full bg-white' />
				</div>
			</div>
		</li>
	)
}
