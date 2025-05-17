import NavBar from "./Navbar.tsx";
import {Outlet} from "react-router-dom";
import React from "react";
import {Toaster} from "react-hot-toast";

const UserLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Toaster
                position={"top-right"}
            ></Toaster>
        </div>
    );
};

export default UserLayout