import React from "react";
import Main from "./pages/Contacts";
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./components/Theme";
import {Provider} from 'react-redux'
import {store} from './store'
const MainApp =()=>{
  // throw new Error('there will be an error!');
  return <RouterProvider router={router}/> ;
}

const App=()=>{
  return(
  <Provider store={store}>
     <ErrorBoundary>  
      <ThemeProvider>
   <MainApp/>
   </ThemeProvider>
  </ErrorBoundary>
  </Provider>
  )
 
}
export default App