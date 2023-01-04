import { BsCheck } from 'react-icons/bs'
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
      className={`grid place-items-center h-5 w-5 rounded-full flex-shrink-0 text-c-text  ${
        done
          ? 'bg-c-text'
          : 'border-2'
      }`}
    >
      {done && <BsCheck className='fill-c-bg' />}
    </button>
  )
}
