import { useDispatch } from 'react-redux'
import { deleteTag } from '@store'

export const TagItem = ({ text, id }) => {
  const dispatch = useDispatch()
  return (
    <li
      onClick={() => dispatch(deleteTag({ id, tag: text }))}
      className='px-2 py-[.12rem] w-fit h-min text-xs font-light text-white cursor-pointer bg-slate-500'
    >
      {text[0].toUpperCase() + text.slice(1)}
    </li>
  )
}
