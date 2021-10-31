import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PackageDetails = () => {
    const { id } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://eerie-nightmare-64183.herokuapp.com/packages/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSinglePackage(data);
            });
    }, [id]);
    const onSubmit = (data) => {
        data["status"] = "pending";
        axios
            .post("https://eerie-nightmare-64183.herokuapp.com/bookings", data)
            .then((res) => console.log(res));

        alert("Package added on the queue");
        reset();
    };
    return (
        <div className="mt-6">
            <h2 className="text-4xl text-greenblue-dark my-5 font-semibold">
                Book This Package
            </h2>
            <div className="details-body grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 py-8 w-11/12 mt-10 mx-auto gap-4">
                <div className="details">
                    <div className="thumb">
                        <img
                            src={singlePackage.img}
                            alt=""
                            className="mx-auto"
                        />
                    </div>
                    <h2 className="text-3xl my-4 font-semibold text-navyblue">
                        {singlePackage.packageName}
                    </h2>
                    <p className="py-3">
                        Description: {singlePackage.package_desc}
                    </p>
                    <p className="font-medium text-2xl">
                        Tour Date: {singlePackage.date}
                    </p>
                    <p className="font-medium text-2xl">
                        Tour City: {singlePackage.city}
                    </p>
                    <p className="font-medium text-2xl">
                        Package Price: ${singlePackage.price}
                    </p>
                </div>

                <div className="booking border-l border-customGrey-light">
                    {/* Booking Form  */}
                    <h3 className="text-3xl mb-4 font-medium text-customGrey-dark">
                        Please fill this form up to confirm your booking
                    </h3>
                    <div className="booking-form px-3 w-8/12 mx-auto">
                        {user.email && singlePackage.packageName ? (
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col"
                            >
                                <input
                                    className="py-2 px-2 text-center rounded-md border-2 border-greenblue my-2 "
                                    type="text"
                                    {...register("name")}
                                    defaultValue={user.displayName}
                                />
                                <input
                                    className="py-2 px-2 text-center rounded-md border-2 border-greenblue my-2 "
                                    type="email"
                                    {...register("email")}
                                    defaultValue={user.email}
                                />
                                {singlePackage ? (
                                    <input
                                        className="py-2 px-2 text-center rounded-md border-2 border-greenblue my-2 "
                                        type="text"
                                        {...register("packageName")}
                                        defaultValue={
                                            singlePackage?.packageName
                                        }
                                    />
                                ) : (
                                    ""
                                )}
                                <input
                                    className="py-2 px-2 text-center rounded-md border-2 border-greenblue my-2 "
                                    type="address"
                                    {...register("address")}
                                    placeholder="Full Address"
                                    required
                                />

                                <input
                                    className="py-2 px-2 text-center rounded-md border-2 border-greenblue my-2 "
                                    type="tel"
                                    {...register("phone")}
                                    placeholder="Phone"
                                    required
                                />
                                <input
                                    className="py-2 font-medium px-2 w-5/12 mx-auto text-center rounded-md border bg-greenblue hover:bg-greenblue-dark transition-all duration-300 my-2 "
                                    type="submit"
                                    value="Book Now"
                                />
                            </form>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;
