import { addNote } from '@store'
import { useDispatch } from 'react-redux'

export const CreateNote = ({ id, note }) => {
  const dispatch = useDispatch()
  const onWriteNote = e => {
    dispatch(addNote({ id, note: e.target.value }))
  }

  return (
    <textarea
      placeholder='Add a note'
      className=' p-1 text-sm font-light outline-1 outline-dashed outline-c-text bg-c-box placeholder:font-light placeholder:text-sm'
      onChange={onWriteNote}
      value={note}
    />
  )
}
