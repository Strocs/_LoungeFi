import { create } from 'zustand'
import { v4 as uuid } from 'uuid'
import { DEFAULT_FILTER_ITEMS, STORAGE_TASK_ID } from '@constants'
import { useLocalStorage } from '@hooks'
import { getTasksByFilter, uniqueFilterItems } from '@utils'

const storedValue = useLocalStorage({
	key: STORAGE_TASK_ID,
	initialValue: {
		tasks: [],
		filteredTasks: [],
		filter: 'All',
		filterItems: DEFAULT_FILTER_ITEMS,
	},
})

export const useTaskStore = create((set, get) => ({
	tasks: storedValue.tasks,
	filteredTasks: storedValue.filteredTasks,
	filter: storedValue.filter,
	filterItems: storedValue.filterItems,
	addTask: ({ task, tag }) => {
		set(state => ({
			tasks: [
				{
					id: uuid(),
					task: task,
					note: '',
					done: false,
					created: new Date().getTime(),
					tags: !!tag ? [tag] : [],
					...state.tasks,
				},
			],
		}))
		get().updateFiltersAndLocalStorage()
	},
	editTask: ({ id, newTask }) => {
		set(state => ({
			tasks: state.tasks.map(task => (task.id === id ? { ...task, task: newTask } : task)),
		}))
		get().updateFiltersAndLocalStorage()
	},
	removeTask: id => {
		set(state => ({
			tasks: state.tasks.filter(task => task.id !== id),
		}))
		get().updateFiltersAndLocalStorage()
	},
	toggleDone: id => {
		set(state => ({
			tasks: state.tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task)),
		}))
		get().updateFiltersAndLocalStorage()
	},
	addNote: ({ id, note }) => {
		set(state => ({
			tasks: state.tasks.map(task => (task.id === id ? { ...task, note: note } : task)),
		}))
		get().updateFiltersAndLocalStorage()
	},
	deleteDones: () => {
		set(state => ({
			tasks: state.tasks.filter(({ done }) => !done),
		}))
		get().updateFiltersAndLocalStorage()
	},
	addTag: ({ id, tag }) => {
		set(state => ({
			tasks: state.tasks.map(task => {
				if (task.id === id) {
					if (!task.tags.includes(tag.toLowerCase())) {
						task.tags = [...task.tags, tag.toLowerCase()]
					}
					return task
				}
			}),
		}))
		get().updateFiltersAndLocalStorage()
	},
	deleteTag: ({ id, taskTag }) => {
		set(state => ({
			tasks: state.tasks.map(task => {
				if (task.id === id) {
					task.tags = task.tags.filter(tag => tag !== taskTag.toLowerCase())
					return task
				}
			}),
		}))
		get().updateFiltersAndLocalStorage()
	},
	setFilteredTasks: newFilter => {
		set({
			filter: newFilter,
		})
		get().updateFiltersAndLocalStorage()
	},
	updateFiltersAndLocalStorage: () => {
		set(state => ({
			filteredTasks: getTasksByFilter(state.tasks, state.filter),
			filterItems: uniqueFilterItems(DEFAULT_FILTER_ITEMS, state.tasks),
		}))
		let value = {
			tasks: get().tasks,
			filteredTasks: get().filteredTasks,
			filter: get().filter,
			filterItems: get().filterItems,
		}
		useLocalStorage({ key: STORAGE_TASK_ID, value })
	},
}))
