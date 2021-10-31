import React, { useEffect, useState } from "react";
import SinglePackage from "./SinglePackage/SinglePackage";

const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://eerie-nightmare-64183.herokuapp.com/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);
    return (
        <div className="w-11/12 mx-auto my-5">
            <h2 className="text-5xl font-semibold text-customGrey-dark text-center my-5">
                All Packages
            </h2>
            <div className="all-packages grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                {packages.map((singlePackage) => (
                    <SinglePackage
                        key={singlePackage._id}
                        package={singlePackage}
                    ></SinglePackage>
                ))}
            </div>
        </div>
    );
};

export default AllPackages;
