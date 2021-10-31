import AOS from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePackage from "../AllPackages/SinglePackage/SinglePackage";
import "./Home.css";
AOS.init({
    duration: 1200,
});

const Home = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://eerie-nightmare-64183.herokuapp.com/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    const slicedPackages = packages?.slice(0, 6);
    return (
        <>
            <section className="hero-bg">
                <div className="hero py-20 animate__animated  animate__fadeInUp">
                    <h1 className="text-6xl font-semibold text-greenblue">
                        Welcome to TravelOne
                    </h1>

                    <p className="my-3 text-xl md:w-2/5 sm:w-3/5 w-4/5 mx-auto mt-8 ">
                        We are a USA based travel agency. We provide differents
                        package tour on differents cities all over the globe.
                        Our tour packages are group based. We take a number of
                        people to explore different corner of the world. You can
                        book your seat for making a trip on your desired city
                    </p>
                    <div className="buttons my-3">
                        <Link to="/about">
                            <button className="px-4 py-2 mx-2 text-xl font-medium border border-navyblue text-navyblue hover:text-greenblue hover:bg-navyblue hover:border-navyblue transition duration-300 rounded-sm bg-transparent">
                                Learn More{" "}
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="px-4 py-2 text-xl font-medium rounded-sm border border-greenblue text-navyblue bg-greenblue hover:bg-navyblue hover:text-greenblue transition duration-300 hover:border-navyblue">
                                Sign in
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <h2
                    data-aos="fade-up"
                    className="my-8 text-4xl font-semibold py-2"
                >
                    Best Tour Packages For You
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-10/12 mx-auto">
                    {slicedPackages.map((pack) => (
                        <SinglePackage
                            key={pack._id}
                            package={pack}
                        ></SinglePackage>
                    ))}
                </div>
            </section>
            <section className="upcomming-event py-12 my-10">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-10/12 mx-auto">
                    <div
                        data-aos="fade-up"
                        className="event p-8 bg-blackTransparent-70 text-white my-20 border border-white"
                    >
                        <div className="event-title">
                            <h3 className="text-3xl font-semibold">
                                Group Tour to Lake Baikal
                            </h3>
                        </div>
                        <div className="event-details my-4">
                            <p>
                                We are planning a group to lake baikal no
                                December 1st, 2021. It's a 7 days tour plan. if
                                you are interested book your seat now!{" "}
                            </p>
                        </div>
                        <div className="price my-3">
                            <h4 className="font-medium text-2xl">
                                <span>Cost: </span>$1,299
                            </h4>
                        </div>
                        <div className="book-now-btn mt-4">
                            <button className="px-4 py-2 border bg-transparent text-xl font-medium ">
                                Book Now
                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>

            <section></section>
        </>
    );
};

export default Home;
