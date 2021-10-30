import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";

const NavBar = (props) => {
    const { user, logout } = useAuth();
    const { mobile, onClick } = props;
    const navItems = [
        { key: 1, itemName: "Home", to: "/" },
        { key: 2, itemName: "About", to: "/about" },
        { key: 3, itemName: "All Packages", to: "/all-packages" },
    ];
    // User's Routes
    const userNav = [
        { key: 1, itemName: "My Booking", to: "/my-bookings" },
        { key: 2, itemName: "All Bookings", to: "/all-bookings" },
        { key: 3, itemName: "Add a new Package", to: "/add-package" },
    ];
    return (
        <div className="flex items-center">
            <div className={mobile ? "nav-mobile" : "nav"}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.key}
                        className={
                            mobile
                                ? "nav-link-mobile "
                                : "nav-link px-3 py-2 mx-2 text-customGrey hover:text-greenblue-dark"
                        }
                        to={item.to}
                        onClick={onClick}
                    >
                        {item.itemName}
                    </NavLink>
                ))}

                {user.email
                    ? userNav.map((item) => (
                          <NavLink
                              key={item.key}
                              to={item.to}
                              className={
                                  mobile
                                      ? "nav-link-mobile "
                                      : "nav-link px-2 py-2 mx-4 text-customGrey hover:text-greenblue-dark"
                              }
                          >
                              {item.itemName}
                          </NavLink>
                      ))
                    : ""}

                {user.email ? (
                    <>
                        <button onClick={() => logout()}>Log out</button>
                        <img
                            src={user.photoURL}
                            title={user.displayName}
                            alt=""
                            className="rounded-full md:hidden lg:hidden inline-block h-12 w-12"
                        />
                    </>
                ) : (
                    <>
                        <NavLink to="/login">Login</NavLink>
                    </>
                )}
            </div>
            {user.email ? (
                <div className="md:inline-block sm:hidden hidden user-icon mx-2">
                    <img
                        src={user.photoURL}
                        // width="30px"
                        title={user.displayName}
                        alt=""
                        className="rounded-full h-12 w-12"
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default NavBar;
