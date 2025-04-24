import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import SwapiDetails from "../pages/SwapiDetails";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
        {index:true,element:<Main/>},
        {path:'/swapidetails',element:<SwapiDetails/>},
        
        {path:'*', element:<NotFound/>}


    ]}
])