import { DeleteTodo, DoneButton } from '.'
import { CreateTag, DeleteTag, TagItem, TodoDateTag } from '../../components/'

export const TodoItem = ({ text, done, created, id, tags }) => {
  return (
    <li className='flex items-center justify-between gap-2 px-5 py-3 w-full bg-c-box'>
      <div className='flex items-center gap-4'>
        <DoneButton done={done} id={id} />
        <div>
          <p className={done ? 'text-c-gray line-through' : 'text-c-text'}>
            {text}
          </p>
          <ul className='flex gap-1 flex-wrap'>
            <TodoDateTag created={created} done={done} />
            {tags.map(tag => (
              <TagItem key={tag} text={tag} id={id} />
            ))}
            <li>
              <CreateTag id={id} />
            </li>
          </ul>
        </div>
      </div>
      <DeleteTodo id={id} />
    </li>
  )
}
