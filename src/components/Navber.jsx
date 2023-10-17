/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Auth/Authprovider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <div className="flex justify-between items-center mt-2 px-4 bg-[#FFFFFFF2] bg-sky-50 rounded-md h-20">
                <h1>
                    <img
                        className="h-14 w-20 rounded-md"
                        src="https://i.ibb.co/1GLSXw3/logo-net-empregos.png"
                        alt=""
                    />
                </h1>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="AddProduct"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                AddProduct
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="MyCart"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
                                MyCart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="Login"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "text-red-500 underline"
                                        : ""
                                }>
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
                            <span className="text-red-500 underline">
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
