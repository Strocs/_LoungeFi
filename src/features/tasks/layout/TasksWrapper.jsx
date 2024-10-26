import { useRadioStore } from '@features/radioPlayer/store'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const TasksWrapper = ({ children }) => {
  const isRadioOn = useRadioStore((state) => state.isRadioOn)

  return (
    <section name='tasks-panel' className={`relative text-slate-100 rounded-xl ${isRadioOn ? 'bg-dark/20' : ''}`}>
      {children}
    </section>
  )
}
