import { useRadioStore } from '@features/radio/store'
import { cn } from '@utils/clsxWithTailwindMerge'

// TODO: Add swipe between Tasks Panels changing the Task Group selected

export const TasksWrapper = ({ children }) => {
  const isRadioOn = useRadioStore((state) => state.isRadioOn)

  return (
    <section name='tasks-panel' className={cn('relative rounded-xl text-slate-100', isRadioOn && 'bg-dark/20')}>
      {children}
    </section>
  )
}
