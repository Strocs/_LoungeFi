import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Register } from '@pages'
import { useCheckAuth } from '@hooks/useCheckAuth'

export function AppRouter () {
  const status = useCheckAuth()

  if (status === 'checking') return <h1>...Checking</h1>
  return (
    <>
      <Routes>
        {status === 'authenticated' ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Navigate to='/login' />} />
          </>
        )}

        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </>
  )
}
