import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { SimpleTaskRouter } from '@router/SimpleTaskRouter'
import { store } from '@store'

export const SimpleTask = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <SimpleTaskRouter />
        </Provider>
      </BrowserRouter>
    </>
  )
}
