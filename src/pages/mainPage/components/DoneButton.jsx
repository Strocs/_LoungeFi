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
			className={`h-5 w-5 rounded-full text-c-text flex-shrink-0 ${done ? 'bg-c-text' : 'border border-c-text border-dashed'}`}
		>
			{done && <BsCheck className='m-auto fill-c-bg' />}
		</button>
	)
}
