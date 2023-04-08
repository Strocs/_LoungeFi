import { useTaskStore } from '@store'

export const CreateNote = ({ id, note }) => {
	const addNote = useTaskStore(state => state.addNote)
	const onWriteNote = e => {
		addNote({ id, note: e.target.value })
	}

	return (
		<textarea
			placeholder='Add a note'
			className=' p-1 text-sm font-light bg-c-box rounded-md placeholder:font-light placeholder:text-sm'
			onChange={onWriteNote}
			value={note}
		/>
	)
}
