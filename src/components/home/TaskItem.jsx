import { Button } from '@ui'
import { TiTick } from 'react-icons/ti'
import { Trash } from '../icons/Trash'
import { Check } from '../icons/Check'

export const TaskItem = ({ task }) => {
	return (
		<li className='flex items-center gap-2'>
			<Button
				border='thick'
				color='transparent'
				padding='sm'
			>
				<Check />
			</Button>
			<p className='leading-none text-sm w-full'>{task}</p>
			<div className='flex items-center'>
				<Button
					color='danger'
					padding='sm'
				>
					<Trash />
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
