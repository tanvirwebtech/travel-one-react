import React, { useEffect, useState } from "react";

const AllBookings = () => {
    const [allBookings, setAllBookkings] = useState([]);
    useEffect(() => {
        fetch("https://eerie-nightmare-64183.herokuapp.com/all-bookings")
            .then((res) => res.json())
            .then((data) => setAllBookkings(data));
    }, []);

    // Handling Approve
    const handleApprove = (id) => {
        const booking = allBookings.find((booking) => booking._id === id);
        booking.status = "approved";
        // console.log(booking);
        fetch(
            `https://eerie-nightmare-64183.herokuapp.com/status-update/${id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(booking),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    alert("Updated successfu!!");
                }
            });
    };

    // Handling Delete
    const handleDelete = (id) => {
        const confirmation = window.confirm("Are You sure??");
        if (confirmation) {
            fetch(
                `https://eerie-nightmare-64183.herokuapp.com/delete-booking/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const rest = allBookings.filter(
                        (booking) => booking._id !== id
                    );
                    allBookings(rest);
                });
        } else {
            return;
        }
    };
    return (
        <div>
            <h2 className="my-6 text-3xl font-medium">All bookings is here!</h2>
            <div className="all-bookings">
                <div className="single-bookings border-b flex justify-evenly w-10/12 mx-auto">
                    <div className="px-4 py-2 text-center sl-no">SL/No.</div>
                    <div className="px-4 py-2 text-center usersName">Name</div>
                    <div className="px-4 py-2 text-center address">Address</div>
                    <div className="px-4 py-2 text-center phone">Phone</div>
                    <div className="px-4 py-2 text-center package-name">
                        Booked Package
                    </div>
                    <div className="px-4 py-2 text-center action">Action</div>
                </div>

                {allBookings.map((booking, index) => (
                    <div
                        key={booking._id}
                        className="single-bookings border-b flex justify-evenly w-10/12 mx-auto"
                    >
                        <div className="px-4 py-2 text-center sl-no">
                            {index + 1}
                        </div>
                        <div className="px-4 py-2 text-center usersName">
                            {booking.name}
                        </div>
                        <div className="px-4 py-2 text-center address">
                            {booking.address}
                        </div>
                        <div className="px-4 py-2 text-center phone">
                            {booking.phone}
                        </div>
                        <div className="px-4 py-2 text-center package-name">
                            {booking.packageName}
                        </div>
                        <div className="px-4 py-2 text-center action">
                            <button
                                className="px-2 py-1 bg-green-600 text-white hover:bg-green-400 transition duration-300 mx-2"
                                onClick={() => handleApprove(booking._id)}
                            >
                                Approve<i className="fas fa-check-circle"></i>
                            </button>
                            <button
                                className="px-2 py-1 bg-yellow-600 text-white hover:bg-red-400 transition duration-300 mx-2"
                                onClick={() => handleDelete(booking._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBookings;
