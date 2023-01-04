import { useDispatch } from 'react-redux'
import { deleteTag } from '../../store'

export const TagItem = ({ text, id, color }) => {
  const dispatch = useDispatch()
  return (
    <li
      onClick={() => dispatch(deleteTag({ id, tag: text }))}
      className={`px-2 py-[.12rem] w-fit h-min text-xs font-light text-c-text cursor-pointer ${
        color === 'green' ? 'bg-green-700' : ''
      } ${color === 'yellow' ? 'bg-yellow-500' : ''} ${
        color === 'red' ? 'bg-red-700' : ''
      } ${!color ? 'bg-slate-500' : ''} ${color === 'done' ? 'bg-c-gray' : ''}`}
    >
      {text[0].toUpperCase() + text.slice(1)}
    </li>
  )
}
