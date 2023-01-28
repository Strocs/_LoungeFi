import { CreationDateTag, CreateTag, TagItem } from '.'

export function TagBar ({ created, done, tags, id }) {
  return (
    <ul className='flex gap-1 flex-wrap'>
      <CreationDateTag created={created} done={done} />
      {tags.map(tag => (
        <TagItem key={tag} text={tag} id={id} />
      ))}
      <li>
        <CreateTag id={id} tags={tags} />
      </li>
    </ul>
  )
}
