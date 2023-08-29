import {
  Pomodoro,
  TaskGroups,
  TasksPanel,
  AddTask,
  Radio,
  ProfileButton
} from '@components/home'
import { Header } from '@components/ui'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const Home = () => {
  return (
    <>
      <Header renderOnRight={<Pomodoro />} />
      <main className='grow flex flex-col max-w-2xl w-full gap-4 mb-5'>
        <AddTask />
        <TasksPanel />
        <TaskGroups />
      </main>
      <Radio renderOnLeft={<ProfileButton />} />
    </>
  )
}
