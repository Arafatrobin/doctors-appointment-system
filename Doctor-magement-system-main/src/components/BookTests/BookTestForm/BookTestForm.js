import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookTestForm = () => {
    const email = sessionStorage.getItem("email");
    const { testname } = useParams()
    const booking = { email, test: testname }

    const handleBooking = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/booktest', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => console.log(data))

        toast.success("Booking Successful");
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='w-50 d-flex justify-content-center'>
                <form onSubmit={handleBooking} className='w-75 d-flex flex-column fs-5 border border-secondary p-5'>
                    <span className='text-start mb-2'><label htmlFor="testName">Test Name</label></span>
                    <input className='mb-2' type="text" name="testName" id="testName" defaultValue={testname} disabled />
                    <span className='text-start mb-2'><label htmlFor="email">User email</label></span>
                    <input className='mb-2' type="email" name="email" id="email" defaultValue={email} disabled />
                    <input className='btn btn-warning mt-4' type="submit" value="Confrim" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookTestForm;