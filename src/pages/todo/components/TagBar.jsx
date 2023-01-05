import { TodoDateTag, CreateTag, TagItem } from '.'

export const TagBar = ({ created, done, tags, id }) => {
  return (
    <ul className='flex gap-1 flex-wrap'>
      <TodoDateTag created={created} done={done} />
      {tags.map(tag => (
        <TagItem key={tag} text={tag} id={id} />
      ))}
      <li>
        <CreateTag id={id} />
      </li>
    </ul>
  )
}
