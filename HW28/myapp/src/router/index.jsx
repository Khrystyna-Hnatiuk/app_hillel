import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Main from "../pages/main";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { index: true, element: <Main /> },
            { path: '/about', element: <About /> },
            { path: '/contacts', element: <Contacts /> },
            { path: '*', element: <NotFound /> }
        ]
    }



])