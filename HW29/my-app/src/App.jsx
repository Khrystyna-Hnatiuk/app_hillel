import React from "react";
import Main from "./pages/Contacts";
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./components/Theme";
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from "redux-persist/integration/react";
const MainApp = () => {
  // throw new Error('there will be an error!');
  return <RouterProvider router={router} />;
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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