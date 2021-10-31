import React from "react";
import logo from "../../images/travelone-logo.png";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="py-10 bg-customGrey-dark text-white">
                    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 w-11/12 sm:w-10/12 md:w-10/12 mx-auto">
                        <div className="site-info flex items-center justify-center">
                            <div className="logo w-20">
                                <img src={logo} alt="" />
                            </div>
                            <h2 className="font-semibold text-2xl">
                                TravelOne
                            </h2>
                        </div>
                        <div className="contact">
                            <h3>Contact Us</h3>
                            <p>
                                {" "}
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                53/Lake Street, New York
                            </p>
                            <p>
                                {" "}
                                <i className="fas fa-phone-alt"></i> +1 569 7878
                            </p>
                        </div>

                        <div className="newsletter">
                            <h3 className="my-2 text-xl text-greenblue">
                                Subscribe to our Newsletter
                            </h3>
                            <div className="input-grp flex justify-center">
                                <input
                                    className="px-3 py-1"
                                    type="email"
                                    required
                                    placeholder="Enter Your Email"
                                />
                                <input
                                    type="submit"
                                    className="bg-navyblue text-greenblue px-3 py-1"
                                    value="Subscribe"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
