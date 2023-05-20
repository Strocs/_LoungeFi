import { Pause, Play, Skip, Stop, Volumen } from '@icons'

export const Player = ({ isPaused = true, onPlay = () => {}, onStop = () => {} }) => {
	return (
		<>
			<div className='flex gap-4 text-white'>
				<button className='shadow-opacitygrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'>
					<Skip reverse />
				</button>
				<button
					className='shadow-opacitygrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'
					onClick={() => onPlay()}
				>
					{isPaused ? <Play /> : <Pause />}
				</button>
				<button
					className='shadow-opacitygrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'
					onClick={() => onStop()}
				>
					<Stop />
				</button>
				<button className='shadow-opacitygrey drop-shadow-[-5px_5px_0_rgba(0,0,0,0.25)]'>
					<Skip />
				</button>
			</div>
			<button className='h-7 w-7 bg-white rounded-full shadow-[-3px_3px_0_0] shadow-blue flex items-center justify-center text-dark'>
				<Volumen />
			</button>
		</>
	)
}
