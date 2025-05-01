import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Todolist from '../pages/TodoList';
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Swapi from "../pages/Swapi";


export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { index: true, element: <Main /> },
            { path: '/todolist', element: <Todolist /> },
            { path: '/swapi', element: <Swapi /> },

            { path: '*', element: <NotFound /> }


        ]
    }
])