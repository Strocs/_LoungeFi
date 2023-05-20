import { Pomodoro, TaskGroups, TasksPanel, NowPlaying, Player } from '@components/home'
import { Button, Header } from '@ui'
import { useState } from 'react'

const currentRadio = 'lofi hip hop radio 📚 - beats to relax/study to'
const avatarUrl = 'https://avatars.githubusercontent.com/u/71996940?v=4'
const radioStreaming = ['https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg']

export const Home = () => {
	const [isPaused, setIsPaused] = useState(true)
	const [isStopped, setIsStopped] = useState(true)

	const handlePlay = () => {
		setIsPaused(!isPaused)
		setIsStopped(false)
	}

	const handleStop = ref => {
		setIsPaused(true)
		setIsStopped(true)
	}

	return (
		<>
			<Header>
				<Pomodoro />
			</Header>
			<main className='h-full flex flex-col'>
				<TaskGroups />
				<TasksPanel />
			</main>
			<footer className='h-24'>
				<div className='px-6 py-1 pb-4 flex justify-between items-center'>
					<Button
						size=''
						padding='none'
						className='overflow-hidden'
						animated
					>
						<img
							src={avatarUrl}
							alt=''
							className='h-7 w-7'
						/>
					</Button>
					<Player
						isPaused={isPaused}
						onPlay={handlePlay}
						onStop={handleStop}
					/>
				</div>
				<NowPlaying
					radio={currentRadio}
					isStopped={isStopped}
					isPaused={isPaused}
				/>
			</footer>
			{!isPaused && (
				<section className='absolute top-0 bottom-0 w-full left-0 right-0 -z-20 overflow-hidden'>
					<img
						src={radioStreaming[0]}
						alt=''
						className='h-full object-cover'
					/>
				</section>
			)}
		</>
	)
}
