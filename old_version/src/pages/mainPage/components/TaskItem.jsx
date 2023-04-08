import { Link } from 'react-router-dom'
import { removeAccentsMark } from '@utils'
import { FiArrowUpRight } from 'react-icons/fi  '
import { DeleteTask, DoneButton } from '.'

export function TaskItem({ text, done, id }) {
	const textToPath = removeAccentsMark(text).replaceAll(' ', '-').toLowerCase()
	return (
		<li className='flex items-center justify-between gap-2 w-full'>
			<div className='flex items-center gap-4'>
				<DoneButton done={done} id={id} />
				<Link to={textToPath} state={id} className='leading-none'>
					<span className={`hover:underline text-sm ${done ? 'text-c-gray line-through' : 'text-c-text'}`}>{text}</span>
					<FiArrowUpRight className='text-c-text inline ml-2' />
				</Link>
			</div>
			<DeleteTask id={id} />
		</li>
	)
}
