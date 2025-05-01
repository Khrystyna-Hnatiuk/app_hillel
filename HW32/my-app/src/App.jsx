import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './router'
import { Provider } from 'react-redux'
import { store, persistor } from './store-saga'
import { PersistGate } from 'redux-persist/lib/integration/react'
const MainApp = () => {

  return <RouterProvider router={router} />
}
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  )
}

export default App
