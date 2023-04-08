// import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage } from '@pages'
import TaskInfoPage from '@pages'
import { Header } from '@components'

// const TaskInfoPage = lazy(() => import('@pages'))

export function AppRouter() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<TasksPage />} />
				<Route path='/:id' element={<TaskInfoPage />} />
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
		</>
	)
}
