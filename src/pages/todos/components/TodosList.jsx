import { TodoItem } from '.'

export const TodosList = ({ items }) => {
  return (
    <ul>
      {items.map(({ todo, done, id, tags, created }) => (
        <TodoItem
          key={todo}
          text={todo}
          done={done}
          id={id}
          tags={tags}
          created={created}
        />
      ))}
    </ul>
  )
}
