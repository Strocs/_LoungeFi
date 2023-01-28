import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '@store'
import { TagSuggestions } from '.'

export function CreateTag({ id, tags }) {
	const [showDropdown, setShowDropdown] = useState(false)
	const { filterItems } = useSelector(state => state.taskDone)
	const filters = filterItems.slice(3).filter(item => !tags.includes(item))
	const suggestionsRef = useRef()
	const tagRef = useRef(null)
	const dispatch = useDispatch()

	useEffect(() => {
		//TODO: wrap this fn on a useCallback hook for optimization
		const closeDropdown = e => {
			if (!suggestionsRef.current || suggestionsRef.current.contains(e.target)) {
				return
			}
			setShowDropdown(false)
		}
		document.addEventListener('mousedown', closeDropdown)
		document.addEventListener('touchstart', closeDropdown)
		return () => {
			document.removeEventListener('mousedown', closeDropdown)
			document.removeEventListener('touchstart', closeDropdown)
		}
	}, [suggestionsRef, () => setShowDropdown(false)])

	const handleSubmit = e => {
		e.preventDefault()
		if (tagRef.current !== null && tagRef.current.value.length > 1) {
			dispatch(addTag({ id, tag: tagRef.current.value }))
			tagRef.current.value = ''
		}
	}

	const handleSelectTag = tag => {
		dispatch(addTag({ id, tag }))
		tagRef.current.focus()
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='h-full w-fit text-xs font-light leading-none relative'>
				<input
					className='h-full w-12 bg-c-box text-c-text outline-none placeholder:text-base placeholder:text-c-text'
					type='text'
					ref={tagRef}
					placeholder='&#43;'
					onFocus={() => setShowDropdown(true)}
				/>
				{showDropdown && filters.length !== 0 && <TagSuggestions onSelectTag={handleSelectTag} filters={filters} ref={suggestionsRef} />}
			</form>
		</>
	)
}
