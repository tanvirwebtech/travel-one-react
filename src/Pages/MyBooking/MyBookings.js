import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./MyBooking.css";
const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/my-bookings/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyBookings(data));
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are You sure??");
        if (confirmation) {
            fetch(`http://localhost:5000/delete-booking/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const rest = myBookings.filter(
                        (booking) => booking._id !== id
                    );
                    setMyBookings(rest);
                });
        } else {
            return;
        }
    };
    return (
        <div>
            <h2 className="my-6 text-3xl font-medium">
                You have booked{" "}
                <span className="text-greenblue-dark">{myBookings.length}</span>{" "}
                Packages
            </h2>
            <div className="bookings">
                <table className="w-11/12 mx-auto p-8 border border-greenblue rounded-lg">
                    <thead>
                        <tr>
                            <th>SL/No.</th>
                            <th>Package Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBookings.map((booking, index) => (
                            <tr key={booking._id}>
                                <td>{index + 1}</td>
                                <td>{booking.packageName}</td>
                                <td>{booking.address}</td>
                                <td>{booking.phone}</td>
                                <td className="status font-medium text-yellow-500">
                                    {booking.status}
                                </td>
                                <td className="status font-medium text-red-500">
                                    <button
                                        onClick={() =>
                                            handleDelete(booking._id)
                                        }
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
