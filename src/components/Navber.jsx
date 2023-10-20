/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Auth/Authprovider";

import "./Navber.css";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <div className="    flex justify-between  items-center mt-2 px-4 bg-[#FFFFFFF2] rounded-md lg:h-20 md:flex-col lg:flex-row">
                <h1>
                    <img
                        className="h-14 w-20 rounded-md"
                        src="https://i.ibb.co/1GLSXw3/logo-net-empregos.png"
                        alt="Website Logo"
                    />
                </h1>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink
                                to="/"
                                activeClassName="text-red-500 underline">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/AddProduct"
                                activeClassName="text-red-500 underline">
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/MyCart"
                                activeClassName="text-red-500 underline">
                                My Cart
                            </NavLink>
                        </li>
                        <li className="login">
                            <NavLink
                                to="/Login"
                                activeClassName="text-red-500 underline">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center">
                    {user ? (
                        <>
                            <img
                                src={user.photoURL}
                                alt="User Profile"
                                className="h-10 rounded-full"
                            />
                            <span className="text-red-500 underline user-email ">
                                {user.email}
                            </span>
                            <button
                                onClick={logOut}
                                className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to="/Login">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-md ml-2">
                                Login
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navber;
