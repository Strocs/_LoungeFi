import { formatDate } from '@utils'

export const CreationDate = ({ created }) => {
  const createdDate = formatDate(created)
  return (
    <p className='text-xs leading-none font-light -mt-2 -mb-1 text-c-gray'>
      {createdDate}
    </p>
  )
}
