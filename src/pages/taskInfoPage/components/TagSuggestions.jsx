import { forwardRef } from 'react'

export const TagSuggestions = forwardRef(function TagSuggestions(props, ref) {
	const { filters, onSelectTag } = props
	return (
		<ul className='flex flex-col gap-2 p-2 w-ful max-w-fit absolute bg-c-bg' ref={ref}>
			{filters.map(filter => (
				<li key={filter} onClick={() => onSelectTag(filter)} className='px-2 py-[.12rem] w-full text-center h-min text-xs font-light text-white cursor-pointer bg-slate-500 hover:bg-white hover:text-slate-500'>
					{filter[0].toUpperCase() + filter.slice(1)}
				</li>
			))}
		</ul>
	)
})
