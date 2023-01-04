import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { SimpleTodoRouter } from './router/SimpleTodoRouter'
import { store } from './store'

export const SimpleTodo = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <SimpleTodoRouter />
        </Provider>
      </BrowserRouter>
    </>
  )
}
