import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Home from "./Home.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import ErrorPage from "./ErrorPage.tsx";
import UserLayout from "./UserLayOut.tsx";
import Login from "./Login.tsx";
import DashBoard from "./DashBoard.tsx";
import CustomerPage from "./CustomerPage.tsx";
import OrderPage from "./OrderPage.tsx";
import StockPage from "./StockPage.tsx";



const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path : '/login' , element:<Login/>},
            { path : '/dashBoard' , element:<DashBoard/>},
            { path : '/dashBoard/customer' , element:<CustomerPage/>},
            { path : '/dashBoard/order' , element:<OrderPage/>},
            { path : '/dashBoard/stock' , element:<StockPage/>},


        ]
    }
]);

export default router;
