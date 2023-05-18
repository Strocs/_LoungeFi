import { useState } from 'react'
import { Button } from './ui/Button'

export const PomodoroBox = () => {
	const [active, setActive] = useState(false)
	return (
		<div className='flex items-center justify-between px-4 bg-white w-32 h-7 rounded-full shadow-[-3px_4px_0_0] shadow-blue'>
			<Button color='active'>
				<p className='leading-none -mt-[.1px] py-[2.75px]'>Start</p>
			</Button>
			<div className='flex flex-col items-center'>
				<p className='font-bold leading-none tracking-tight text-dark'>25:00</p>
				<div className='flex gap-[5px]'>
					<span className='w-[6px] h-[6px] rounded bg-lightgrey' />
					<span className='w-[6px] h-[6px] rounded bg-lightgrey' />
					<span className='w-[6px] h-[6px] rounded bg-lightgrey' />
					<span className='w-[6px] h-[6px] rounded bg-lightgrey' />
				</div>
			</div>
		</div>
	)
}
