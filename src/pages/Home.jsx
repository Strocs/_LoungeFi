import { Pomodoro, TaskGroups, TasksPanel, NowPlaying } from '@components/home'
import { Header } from '@ui'

const currentSong = 'Lo Fi Stream - Pedro Pascal'

export const Home = () => {
	return (
		<>
			<Header>
				<Pomodoro />
			</Header>
			<main className='h-full flex flex-col'>
				<TaskGroups />
				<TasksPanel />
			</main>
			<footer className='text-white h-24 overflow-hidden'>
				<div className='px-6 py-1 pb-4 flex justify-between items-center'>
					<div className='h-7 w-7 bg-white rounded-full shadow-[-3px_3px_0_0] shadow-blue'></div>
					<div className='flex gap-4'>
						<div className='h-7 w-7 bg-white'></div>
						<div className='h-7 w-7 bg-white'></div>
						<div className='h-7 w-7 bg-white'></div>
						<div className='h-7 w-7 bg-white'></div>
					</div>
					<div className='h-7 w-7 bg-white rounded-full shadow-[-3px_3px_0_0] shadow-blue'></div>
				</div>
				<NowPlaying song={currentSong} />
			</footer>
		</>
	)
}
