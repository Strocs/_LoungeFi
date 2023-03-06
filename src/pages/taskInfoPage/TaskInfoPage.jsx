import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useGetTasks } from '@hooks'
import {
	CreateNote,
	CreationDate,
	ModifyTask,
	Pomodoro,
	TagBar,
	TaskInfoButton,
} from './components'

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
				<div className='grid gap-3 text-c-text rounded-xl pt-4 pb-6 bg-c-bg px-5'>
					<ModifyTask task={task} id={id} />
					<CreationDate created={created} />
					<div className='flex items-center gap-2'>
						<p className='font-light'>Tags: </p>
						<TagBar id={id} done={done} created={created} tags={tags} />
					</div>
					<CreateNote id={id} note={note} />
					<div className='flex gap-3'>
						{/* <TaskInfoButton text='Pomodoro (soon)' onClick={() => {}} /> */}
						<TaskInfoButton text='Close' onClick={onNavigate} />
					</div>

					<Pomodoro id={id} />

          <div className='flex flex-shrink-0 gap-3 overflow-x-scroll'>
            <div className='min-h-20 w-full h-full bg-slate-500 min-w-20 rounded-lg'>
            </div>
            <div className='min-h-20 bg-slate-500 min-w-20 rounded-lg'>
            </div>
            <div className='min-h-20 bg-slate-500 min-w-20 rounded-lg'>
            </div>
            <div className='min-h-20 bg-slate-500 min-w-20 rounded-lg'>
            </div>
          </div>
				</div>
			</section>
		</>
	)
}
