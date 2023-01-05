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
      className={`h-5 w-5 rounded-full text-c-text flex-shrink-0 ${
        done
          ? 'bg-c-text'
          : 'border border-c-text border-dashed'
      }`}
    >
      {done && <BsCheck className='m-auto fill-c-bg' />}
    </button>
  )
}
