import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const MainLayout = () => {
    return (
        <div className="w-[1320px] mx-auto">
            <Navber></Navber>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
