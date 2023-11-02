import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const MainLayout = ({ children }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <Navbar></Navbar>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <>
                    {/* Sidebar content here */}
                    <Sidebar></Sidebar>
                </>
            </div>
        </div>

    );
};

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;
