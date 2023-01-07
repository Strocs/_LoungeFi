import { Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage, TaskInfoPage } from '@pages'
import { Header } from '@pages/components'

export function SimpleTaskRouter () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<TasksPage />}>
          <Route path='/:id' element={<TaskInfoPage />} />
        </Route>
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
