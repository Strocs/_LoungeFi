import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@router/AppRouter'

export function TaskDoneApp() {
	return (
		<>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</>
	)
}
