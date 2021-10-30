import React, { useEffect, useState } from "react";
import SinglePackage from "../AllPackages/SinglePackage/SinglePackage";
import "./Home.css";
const Home = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    const slicedPackages = packages?.slice(0, 6);
    return (
        <>
            <section className="hero-bg">
                <div className="hero py-20">
                    <h1 className="text-6xl font-semibold">
                        Welcome to TravelOne
                    </h1>
                    <p className="my-3 text-xl w-2/5 mx-auto mt-8">
                        We are a USA based travel agency. We provide differents
                        package tour on differents cities all over the globe.
                        Our tour packages are group based. We take a number of
                        people to explore different corner of the world. You can
                        book your seat for making a trip on your desired city
                    </p>
                    <div className="buttons my-3">
                        <button className="px-4 py-2 mx-2 text-xl font-xl border border-greenblue rounded-sm bg-transparent">
                            Learn More
                        </button>
                        <button className="px-4 py-2 text-xl font-xl rounded-sm border border-greenblue bg-greenblue">
                            Sign in
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="my-8 text-3xl font-semibold py-2">
                    Best Tour Packages For You
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-10/12 mx-auto">
                    {slicedPackages.map((pack) => (
                        <SinglePackage
                            key={pack._id}
                            package={pack}
                        ></SinglePackage>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
