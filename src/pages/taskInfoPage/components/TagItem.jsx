import { useTaskStore } from '@store'

export function TagItem({ text, id }) {
	const deleteTag = useTaskStore(state => state.deleteTag)
	return (
		<li onClick={() => deleteTag({ id, taskTag: text })} className='px-2 py-[.12rem] w-fit h-min text-xs font-light text-white cursor-pointer bg-slate-500'>
			{text[0].toUpperCase() + text.slice(1)}
		</li>
	)
}
