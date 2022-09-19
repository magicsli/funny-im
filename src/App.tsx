import { RouterProvider } from 'react-router'
import { router } from './router'
import { store } from '@/redux'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
