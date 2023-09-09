import { Routes, Route } from 'react-router-dom'
import { Home, Login } from '@pages'

export function AppRouter () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
