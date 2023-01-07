import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTag } from '@store'

export const CreateTag = ({ id }) => {
  const tagRef = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (tagRef.current !== null && tagRef.current.value.length > 1) {
      dispatch(addTag({ id, tag: tagRef.current.value }))
      tagRef.current.value = ''
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='h-full w-fit text-xs font-light leading-none'
    >
      <input
        className='h-full w-12 bg-c-bg text-c-text outline-none placeholder:text-base placeholder:text-c-text'
        type='text'
        ref={tagRef}
        placeholder='&#43;'
      />
    </form>
  )
}
