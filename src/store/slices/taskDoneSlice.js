import { v4 as uuid } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'
import { getTasksByFilter, uniqueFilterItems } from '@utils'
import { useLocalStorage } from '@hooks'
import { DEFAULT_FILTER_ITEMS, STORAGE_TASK_ID } from '@constants'

const storedValue = useLocalStorage({
	key: STORAGE_TASK_ID,
	initialValue: {
		tasks: [],
		filteredTasks: [],
		filter: 'All',
		filterItems: DEFAULT_FILTER_ITEMS,
	},
})

export const taskDoneSlice = createSlice({
	name: 'taskDone',
	initialState: storedValue,
	reducers: {
		addTask: (state, { payload }) => {
			state.tasks.unshift({
				id: uuid(),
				task: payload.task,
				note: '',
				done: false,
				created: new Date().getTime(),
				tags: !!payload.tag ? [payload.tag] : [],
			})
			state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		editTask: (state, { payload }) => {
			state.tasks.map(task => {
				if (task.id !== payload.id) return
				task.task = payload.newTask
				return task
			})
			state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		deleteTask: (state, { payload }) => {
			state.tasks = state.tasks.filter(({ id }) => id !== payload)
			state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
			state.filterItems = uniqueFilterItems(DEFAULT_FILTER_ITEMS, state.tasks)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		toggleDone: (state, { payload }) => {
			state.tasks.map(task => {
				if (task.id === payload) {
					task.done = !task.done
				}
			})
			state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		addNote: (state, { payload }) => {
			state.tasks.map(task => {
				if (task.id === payload.id) {
					task.note = payload.note
				}
			})
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		deleteDones: state => {
			state.tasks = state.tasks.filter(({ done }) => !done)
			state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		addTag: (state, { payload }) => {
			state.tasks.map(task => {
				if (task.id === payload.id) {
					if (!task.tags.includes(payload.tag.toLowerCase())) {
						task.tags = [...task.tags, payload.tag.toLowerCase()]
					}
				}
			})
			state.filterItems = uniqueFilterItems(DEFAULT_FILTER_ITEMS, state.tasks)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		deleteTag: (state, { payload }) => {
			state.tasks.map(task => {
				if (task.id === payload.id) {
					task.tags = task.tags.filter(tag => tag !== payload.tag.toLowerCase())
				}
			})
			state.filterItems = uniqueFilterItems(DEFAULT_FILTER_ITEMS, state.tasks)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
		setFilteredTasks: (state, { payload }) => {
			state.filter = payload
			state.filteredTasks = getTasksByFilter(state.tasks, state.filter)
			useLocalStorage({ key: STORAGE_TASK_ID, value: state })
		},
	},
})

export const { addTask, editTask, deleteTask, toggleDone, addNote, deleteDones, addTag, deleteTag, setFilteredTasks } = taskDoneSlice.actions
