import { CreateTodo, DeleteDones, FilterList, TodosList } from './components'

export const TodosPage = () => {
  return (
    <main className='flex flex-col my-6 md:flex-row relative md:gap-4'>
      <FilterList />
      <div className='w-full max-w-2xl my-4 md:my-auto'>
        <CreateTodo />
        <TodosList />
        <DeleteDones />
      </div>
    </main>
  )
}
