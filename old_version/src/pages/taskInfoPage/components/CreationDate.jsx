import { formatDate } from '@utils'

export const CreationDate = ({ created }) => {
  const createdDate = formatDate(created)
  return (
    <p className='text-xs leading-none font-light -mb-1 text-c-text'>
      {createdDate}
    </p>
  )
}
