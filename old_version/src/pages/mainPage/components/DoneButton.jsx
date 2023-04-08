import { useTaskStore } from '@store'
import { BsCheck } from 'react-icons/bs'

export function DoneButton({ done, id }) {
	const toggleDone = useTaskStore(state => state.toggleDone)

	return (
		<button
			type='button'
			aria-label='Toggle complete'
			onClick={() => {
				toggleDone(id)
			}}
			className={`h-4 w-4 rounded-full text-c-text flex-shrink-0 ${done ? 'bg-c-text' : 'border-2 border-c-text'}`}
		>
			{done && <BsCheck className='m-auto fill-c-bg' />}
		</button>
	)
}
