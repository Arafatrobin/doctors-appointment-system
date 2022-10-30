import React, { useEffect, useState } from 'react';

const MyTest = () => {
    const email = sessionStorage.getItem("email");
    const [booking, setBooking] = useState([]);
    // const [haveBooking, setHaveBooking] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/booktest?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                // setHaveBooking(true)
                console.log(data)
                // console.log(booking)
            })
    }, [email])
    return (
        <div className='row'>

            {
                booking.map(b => <div className="col-md-6 col-lg-5 col-sm-12">
                    <div className="cart-box p-3 bg-success bg-gradient text-white">
                        <h5>Test ID: {b?._id || "No Booking ID"}</h5>
                        <h6>Text Name: {b?.test || "You do not book any test yet!"}</h6>
                        <h4>
                            Status: {b?._id ? "pending" : "No Booking"}
                        </h4>
                        <h6>User Email: {b?.email}</h6>
                        {/* <button className="btn btn-info m-2 p-1">
                  Doctors Details
                </button>
                <br />
                <button className="btn btn-danger m-2 p-1">
                  Cancel Appointment
                </button> */}
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyTest;