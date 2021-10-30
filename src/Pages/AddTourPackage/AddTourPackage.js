import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddTourPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios
            .post("http://localhost:5000/add-package", data)
            .then((res) => console.log(res));
        reset();
    };

    return (
        <>
            <div className="add-package">
                <h2 className="text-3xl my-5">Add a Tour Package</h2>
                <div className="form">
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col"
                    >
                        <input
                            className="py-2 px-2 md:w-1/3 sm:w-2/3 w-11/12 place text-center mx-auto my-2 border-2 border-greenblue-dark"
                            {...register("packageName")}
                            placeholder="Package Name"
                        />
                        <input
                            className="py-2 px-2 md:w-1/3 sm:w-2/3 w-11/12 place text-center mx-auto my-2 border-2 border-greenblue-dark"
                            {...register("city")}
                            placeholder="City"
                        />
                        <textarea
                            className="py-2 px-2 md:w-1/3 sm:w-2/3 w-11/12 place text-center mx-auto my-2 border-2 border-greenblue-dark"
                            {...register("package_desc")}
                            placeholder="Package description"
                        />
                        <input
                            className="py-2 px-2 md:w-1/3 sm:w-2/3 w-11/12 place text-center mx-auto my-2 border-2 border-greenblue-dark"
                            {...register("img")}
                            placeholder="img-url"
                        />
                        <input
                            className="py-2 px-2 md:w-1/3 sm:w-2/3 w-11/12 place text-center mx-auto my-2 border-2 border-greenblue-dark"
                            type="number"
                            {...register("price")}
                            placeholder="Price"
                        />
                        <input
                            className="py-2 px-2 md:w-1/3 sm:w-2/3 w-11/12 place text-center mx-auto my-2 border-2 border-greenblue-dark"
                            type="date"
                            {...register("date")}
                            placeholder="Date"
                        />
                        <input
                            className="py-2 md:w-1/3 sm:w-2/3 w-11/12 place text-center mx-auto my-2  bg-greenblue hover:bg-greenblue-dark transition-all duration-300"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTourPackage;
