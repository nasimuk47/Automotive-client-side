import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import MyCart from "./components/MyCart";

import Home from "./components/Home";
import MainLayout from "./components/MainLayout";

import Login from "./components/Auth/Login";
import AuthProvider from "./components/Auth/Authprovider";
import Registration from "./components/Auth/Registration";
import NotFound from "./components/NotFound";
import BrandDetails from "./components/Database/BrandDetails";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/AddProduct",
                element: (
                    <PrivateRoute>
                        <AddProduct></AddProduct>
                    </PrivateRoute>
                ),
            },
            {
                path: "/MyCart",
                element: <MyCart></MyCart>,
            },
            {
                path: "/brands/:", // Dynamic route for brand details
                element: <BrandDetails></BrandDetails>,
            },

            {
                path: "/Login",
                element: <Login></Login>,
            },
            {
                path: "/Registration",
                element: <Registration></Registration>,
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            {" "}
            {/* Ensure AuthProvider wraps your entire app */}
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
