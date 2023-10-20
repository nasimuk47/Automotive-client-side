/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const MainLayout = () => {
    return (
        <div className="w-full lg:w-[1320px] mx-auto p-4">
            <Navber />
            <div className="lg:px-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
