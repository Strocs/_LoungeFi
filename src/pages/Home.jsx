import { Pomodoro, TaskGroups, TasksPanel, Radio, ProfileButton } from '@components/home'
import { Header } from '@ui'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const Home = () => {

	return (
		<>
			<Header renderOnRight={<Pomodoro />} />
			<main className='grow flex flex-col' >
				<TaskGroups />
				{/* TasksPanel change content between each group selected */}
				<TasksPanel />
			</main>
			<Radio renderOnLeft={<ProfileButton />} />
		</>
	)
}
