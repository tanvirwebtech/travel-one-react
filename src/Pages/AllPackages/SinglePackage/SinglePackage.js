import React from "react";
import { Link } from "react-router-dom";

const SinglePackage = (props) => {
    const { _id, img, packageName, price, city, date, package_desc } =
        props.package;

    return (
        <div>
            <div className="card border-2">
                <div className="card-thumb p-5">
                    <img src={img} className="w-full" alt="" />
                </div>
                <div className="card-body px-2">
                    <div className="card-title">
                        <h3 className="text-2xl py-3 font-medium">
                            {packageName}
                        </h3>
                    </div>
                    <div className="card-desc my-4">
                        <p className="text-customGrey-dark">
                            {package_desc.slice(0, 80)}
                        </p>
                    </div>
                </div>
                <div className="spot-location-date">
                    <p className="font-medium">{city}</p>
                    <div className="date">{date}</div>
                </div>
                <div className="card-footer flex justify-between items-center px-4 font-medium">
                    <h3>${price}</h3>
                    <Link to={`/package-details/${_id}`}>
                        <button className="details-btn px-4 py-2 my-4 border-2 font-medium rounded-md">
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;
