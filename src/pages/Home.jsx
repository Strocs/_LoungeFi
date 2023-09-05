import {
  Pomodoro,
  TaskGroups,
  TasksPanel,
  AddTask,
  Radio,
  ProfileButton,
  NowPlaying
} from '@components/home'
import { Header, Footer } from '@components/ui'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const Home = () => {
  return (
    <>
      <Header>
        <Pomodoro />
      </Header>
      <main className='grid grid-rows-[auto_auto_1fr] gap-3 max-w-xl w-full'>
        <AddTask />
        <TaskGroups />
        <TasksPanel />
      </main>
      <Footer>
        <div className='p-4 flex w-full justify-between items-center'>
          <ProfileButton />
          <Radio />
        </div>
        <NowPlaying />
      </Footer>
    </>
  )
}
