// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/travelone-logo.png";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
    const [navToggle, setNavToggle] = useState(false);

    const handleToggle = () => {
        if (navToggle) {
            setNavToggle(false);
        } else {
            setNavToggle(true);
        }
    };
    return (
        <div className="header">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <div className="logo w-20">
                        <NavLink to="/">
                            <img src={logo} alt="logo" className="w-full" />
                        </NavLink>
                    </div>

                    {/* Nav Bar */}
                    <div className="sm:hidden md:block hidden nav-bar">
                        <NavBar></NavBar>
                    </div>

                    <div className="nav-toggler mx-4 lg:hidden md:hidden sm:block block">
                        <button onClick={handleToggle}>
                            <svg
                                className="
                                    w-6
                                    h-6
                                    text-gray-500
                                    hover:text-green-500
                                "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        {!navToggle ? (
                            ""
                        ) : (
                            <NavBar mobile onClick={handleToggle} />
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
