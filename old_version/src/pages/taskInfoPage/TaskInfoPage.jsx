import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useGetTasks } from '@hooks'
import { CreateNote, CreationDate, ModifyTask, Pomodoro, TagBar, TaskInfoButton } from './components'

export function TaskInfoPage() {
	const { pathname, state } = useLocation()
	const { singleTask } = useGetTasks(state, pathname)
	if (!singleTask) return <Navigate to='/' />
	const { task, note, done, created, tags, id } = singleTask

	const navigate = useNavigate()
	const onNavigate = () => navigate('/')

	return (
		<>
			<main className='grid place-content-between px-4 w-full h-full'>
				<div className='grid gap-2 text-c-text rounded-xl pt-4 pb-6 px-4 bg-c-bg'>
					<CreationDate created={created} />
					<ModifyTask task={task} id={id} />
					<TagBar id={id} done={done} created={created} tags={tags} />
					{/* <CreateNote id={id} note={note} /> */}
				</div>
				<div className='grid gap-8 text-c-text rounded-xl py-4 px-4 bg-c-bg'>
					<Pomodoro id={id} />
					<h2 className='leading-none text-lg font-bold mt-2 -mb-6'>Set your Atmosphere</h2>
					<div className='flex w-full gap-2 overflow-x-scroll'>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
					</div>
					<TaskInfoButton text='Close' onClick={onNavigate} />
				</div>
			</main>
		</>
	)
}
