import { Button } from './components/ui/Button'
import { HiOutlineTrash } from 'react-icons/hi'
import { TiTick } from 'react-icons/ti'
import { Header } from './components/Header'

export function TaskDoneApp() {
	return (
		<>
			<Header />
			<div className='flex justify-center h-96 items-center gap-4'>
				<Button>Focus</Button>
				<Button color='danger'>Cancel</Button>
				<Button disabled>Done</Button>
				<Button
					color='transparent'
					padding='none'
					border='thick'
				>
					<TiTick className='h-3 w-3' />
				</Button>
				<Button
					color='danger'
					padding='none'
				>
					<HiOutlineTrash className='h-4 w-4' />
				</Button>
			</div>
		</>
	)
}
