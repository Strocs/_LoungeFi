import { GoCheck } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { toggleDone } from '../../../store'

export const DoneButton = ({ done, id }) => {
  const dispatch = useDispatch()

  return (
    <button
      type='button'
      onClick={() => {
        dispatch(toggleDone(id))
      }}
      className={`grid place-items-center h-5 w-5 rounded-full flex-shrink-0 text-transparent ${
        done
          ? 'bg-gradient-to-br from-Gradient-1 to-Gradient-2'
          : 'border border-placeholder-light dark:border-placeholder-dark'
      }`}
    >
      {done && <GoCheck />}
    </button>
  )
}
