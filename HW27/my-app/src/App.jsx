import React from "react";
import Main from "./pages/Contacts";
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./components/Theme";
const MainApp =()=>{
  // throw new Error('there will be an error!');
  return <RouterProvider router={router}/> ;
}

const App=()=>{
  return(
  
     <ErrorBoundary>  
      <ThemeProvider>
   <MainApp/>
   </ThemeProvider>
  </ErrorBoundary>
  )
 
}
export default App