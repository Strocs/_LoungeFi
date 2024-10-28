import { DownloadAppButton, GithubButton, WelcomeName } from '@components'
import { Footer, Header, Title } from '@components/ui'
import { usePWAInstall } from 'react-use-pwa-install'
import { useAuthStore } from '@features/auth/store'
import { GroupList } from '@features/groups/components'
import { Pomodoro } from '@features/pomodoro/components'
import { NowPlaying, Radio } from '@features/radio/components'
import { Profile } from '@features/settings/components'
import { CreateTask, TaskFocusModal, TaskPanel } from '@features/tasks/components'
import { useTaskStore } from '@features/tasks/store'
import clsx from 'clsx'

export const HomePage = () => {
  const isFocused = useTaskStore((state) => state.isFocused)
  const { displayName } = useAuthStore((state) => state.userAuth)
  const firstName = displayName?.split(' ')[0]

  const installApp = usePWAInstall()

  return (
    <>
      <Header className={[isFocused && 'translate-x-[calc(50%-75px)]', 'transition-transform duration-300']}>
        <div className='grid gap-1'>
          <Title />
          <WelcomeName name={firstName} />
        </div>
        {!isFocused && <Pomodoro />}
      </Header>
      <main
        className={clsx('grid w-full max-w-xl gap-3', {
          'grid-rows-1': isFocused,
          'grid-rows-[auto_auto_1fr]': !isFocused
        })}
      >
        {isFocused ? (
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
        <section className='grid w-full grid-cols-[1fr_2fr_1fr] items-center px-3 pt-3 pb-1'>
          <Profile name={displayName} />
          <Radio />
          {installApp ? <DownloadAppButton onClick={installApp} /> : <GithubButton />}
        </section>
        <NowPlaying />
      </Footer>
    </>
  )
}
