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
import ProductDetails from "./components/Database/ProductDetails";
import PrivateRoute from "./components/PrivateRoute";
import ProductUpdate from "./ProductUpdate";

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
                element: (
                    <PrivateRoute>
                        <MyCart></MyCart>
                    </PrivateRoute>
                ),
            },
            {
                path: "/brands/:brand_name",
                element: <BrandDetails></BrandDetails>,
            },
            {
                path: "/products/:productId",
                element: (
                    <PrivateRoute>
                        <ProductDetails></ProductDetails>
                    </PrivateRoute>
                ),
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
            {
                path: "/products/update/:id",
                element: <ProductUpdate></ProductUpdate>,
                loader: ({ params }) =>
                    fetch(
                        `https://driver-zen-server-side-3gwzl4j11-nasimuk47.vercel.app/card/${params.id}`
                    ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            {" "}
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
