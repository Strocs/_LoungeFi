import { useTaskStore } from '@store'

export function TagItem({ text, id }) {
	const deleteTag = useTaskStore(state => state.deleteTag)
	return (
		<li onClick={() => deleteTag({ id, taskTag: text })} className='min-h-min px-2 py-1 min-w-max rounded-full text-xs bg-zinc-800 text-c-text leading-none cursor-pointer'>
			<p className='inline-block'>{text[0].toUpperCase() + text.slice(1)}</p>
		</li>
	)
}
