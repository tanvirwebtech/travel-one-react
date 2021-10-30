import React, { useEffect, useState } from "react";

const AllBookings = () => {
    const [allBookings, setAllBookkings] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/all-bookings")
            .then((res) => res.json())
            .then((data) => setAllBookkings(data));
    }, []);
    const handleApprove = (id) => {
        const booking = allBookings.find((booking) => booking._id === id);
        booking.status = "approved";
        // console.log(booking);
        fetch(`http://localhost:5000/status-update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    alert("Updated successfu!!");
                }
            });
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
                            <button onClick={() => handleApprove(booking._id)}>
                                Approve
                            </button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBookings;
