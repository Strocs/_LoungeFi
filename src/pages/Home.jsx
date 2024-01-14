import { usePWAInstall } from 'react-use-pwa-install'
import { WelcomeName, GithubButton, DownloadAppButton } from '@components'
import { Header, Footer, Title } from '@components/ui'
import { useTaskStore, useAuthStore } from '@context'
import { CreateTask, TaskFocusModal, TaskPanel } from '@features/tasks'
import { GroupList } from '@features/groups'
import { Pomodoro } from '@features/pomodoroTimer'
import { Radio, NowPlaying } from '@features/radioPlayer'
import { Profile } from '@features/profile'

export const Home = () => {
  const isFocusModalOpen = useTaskStore(state => state.isFocusModalOpen)
  const { displayName } = useAuthStore(state => state.userAuth)
  const firstName = displayName?.split(' ')[0]

  const installApp = usePWAInstall()

  return (
    <>
      <Header>
        <div className='grid gap-1'>
          <Title />
          <WelcomeName name={firstName} />
        </div>
        <Pomodoro />
      </Header>
      <main
        className={`grid ${
          isFocusModalOpen ? 'grid-rows-1' : 'grid-rows-[auto_auto_1fr]'
        } gap-3 max-w-xl w-full`}
      >
        {isFocusModalOpen ? (
          <TaskFocusModal />
        ) : (
          <>
            <CreateTask />
            <GroupList />
            <TaskPanel />
          </>
        )}
      </main>
      <Footer>
        <section className='pb-1 pt-3 px-3 grid w-full grid-cols-[1fr_2fr_1fr] items-center'>
          <Profile name={displayName} />
          <Radio />
          {installApp ? (
            <DownloadAppButton onClick={installApp} />
          ) : (
            <GithubButton />
          )}
        </section>
        <NowPlaying />
      </Footer>
    </>
  )
}
