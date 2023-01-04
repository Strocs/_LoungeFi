import { GoDash } from 'react-icons/go/index.esm?'
import { useDispatch } from 'react-redux'
import { deleteTag } from '../../store'
export const DeleteTag = ({ text, id }) => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(deleteTag({ id, tag: text }))}
      className='ml-1 -mr-1'
    >
      <GoDash className='fill-c-text text-md' />
    </button>
  )
}
