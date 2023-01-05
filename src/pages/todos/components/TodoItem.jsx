import { Link } from 'react-router-dom'
import { DeleteTodo, DoneButton } from '.'
import { removeAccents } from '../../../services'
import { FiArrowUpRight } from 'react-icons/fi  '

export const TodoItem = ({ text = '', done = false, id = 0 }) => {
  const textToPath = removeAccents(text).replaceAll(' ', '-').toLowerCase()
  return (
    <li className='flex items-center justify-between gap-2 px-5 py-3 w-full bg-c-box'>
      <div className='flex items-center gap-4'>
        <DoneButton done={done} id={id} />
        <Link to={textToPath} state={id} className=''>
          <span
            className={`hover:underline ${
              done ? 'text-c-gray line-through' : 'text-c-text'
            }`}
          >
            {text}
            <FiArrowUpRight className='text-c-text inline ml-2' />
          </span>
        </Link>
      </div>
      <DeleteTodo id={id} />
    </li>
  )
}
