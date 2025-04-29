import { useState } from 'react'
import { RouterProvider } from 'react-router'

import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './components/Theme'
import { router } from './router'
import { Provider } from 'react-redux'
import { store,persistor  } from './store-saga'
import { PersistGate } from 'redux-persist/lib/integration/react'
const MainApp = () => {

  return <RouterProvider router={router} />
}
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

     
      <ErrorBoundary>
        <ThemeProvider>
          <MainApp />
        </ThemeProvider>
      </ErrorBoundary> 
      </PersistGate>
    </Provider>
  )
}

export default App
