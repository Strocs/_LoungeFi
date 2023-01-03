import { DeleteTodo, DoneButton } from '.'
import { CreateTag, DeleteTag, TagItem, TodoDateTag } from '../../components/'

export const TodoItem = ({ text, done, created, id, tags }) => {
  return (
    <li className='flex gap-2 items-center justify-between px-5 py-3 w-full bg-primary-light dark:bg-primary-dark border-b border-bg-light dark:border-bg-dark'>
      <div className='flex gap-4 items-center'>
        <DoneButton done={done} id={id} />
        <div className='flex flex-col gap-1'>
          <p
            className={`text-base ${
              done
                ? 'text-placeholder-dark dark:text-placeholder-dark line-through'
                : 'text-primary-dark dark:text-primary-light'
            }`}
          >
            {text}
          </p>
          <ul className='flex gap-1 flex-wrap w-full'>
            <TodoDateTag created={created} done={done} />
            {tags.map(tag => (
              <TagItem key={tag} text={tag}>
                <DeleteTag text={tag} id={id} />
              </TagItem>
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
