import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from '../pages/components'
import { SingleTodoPage } from '../pages/todo'
import { TodosPage } from '../pages/todos'

export const SimpleTodoRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<TodosPage />} />
        <Route path='/todo/:id' element={<SingleTodoPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
