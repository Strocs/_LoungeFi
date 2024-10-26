import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from '@pages'
import { useCheckAuth } from '@features/auth/hooks'

export function AppRouter() {
  const status = useCheckAuth()

  return (
    <>
      <Routes>
        {status === 'authenticated' ? (
          <>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/*' element={<Navigate to='/login' />} />
          </>
        )}

        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </>
  )
}
