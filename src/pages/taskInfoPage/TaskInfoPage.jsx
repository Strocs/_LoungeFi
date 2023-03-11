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
			<div className='absolute z-0 w-full top-0 bottom-0 h-full backdrop-blur-sm'></div>
			<section className='absolute grid place-content-center z-10 px-4 w-full h-full -mt-16'>
				<div className='grid gap-2 text-c-text rounded-xl pt-4 pb-6 bg-c-bg px-5'>
					<CreationDate created={created} />
					<ModifyTask task={task} id={id} />
					<TagBar id={id} done={done} created={created} tags={tags} />
					{/* <CreateNote id={id} note={note} /> */}
					<div className='w-full py-3 border-dashed'>
						<Pomodoro id={id} />
					</div>
					<div className='flex w-full gap-2 overflow-x-scroll pb-4'>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
						<div className='flex-shrink-0 w-20 h-20 bg-zinc-800 rounded-lg'></div>
					</div>
					<TaskInfoButton text='Close' onClick={onNavigate} />
				</div>
			</section>
		</>
	)
}
