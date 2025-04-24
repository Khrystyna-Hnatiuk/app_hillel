import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './pages/Main'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import ErrorBoundary from '../../../HW29/my-app/src/components/ErrorBoundary'
import { ThemeProvider } from './components/Theme'
import { store } from './store'
const MainApp = () => {
  return <RouterProvider router={router} />
}

const App = () => {
  return (
    <ErrorBoundary>
   <Provider store={store}>
      <ThemeProvider>
        <MainApp />
      </ThemeProvider> 
        </Provider>
    </ErrorBoundary>

  )
}

export default App;