import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Favorites from "../pages/Favorites";
import Main from "../pages/main";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products"
import Counter from "../pages/Counter";
import TodoList from "../pages/TodoList";

export const router = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { index: true, element: <Main /> },
            { path: '/about', element: <About /> },
            { path: '/contacts', element: <Contacts /> },
            { path: '/products', element: <Products /> },
            { path: '/favorites', element: <Favorites /> },
            { path: '/counter', element: <Counter/> },
            { path: '/todolist', element: <TodoList/> },




            { path: '*', element: <NotFound /> }
        ]
    }



])