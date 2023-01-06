import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from '../pages/components'
import { TaskInfoPage } from '../pages/taskInfoPage'
import { TasksPage } from '../pages/mainPage'

export const SimpleTaskRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<TasksPage />}>
          <Route path='/:task' element={<TaskInfoPage />} />
        </Route>
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
