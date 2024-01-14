import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Register } from '@pages'
import { useCheckAuth } from '@hooks/useCheckAuth'
import { LoadingScreen } from '@components'

export function AppRouter () {
  const status = useCheckAuth()

  if (status === 'checking') return <LoadingScreen />
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
