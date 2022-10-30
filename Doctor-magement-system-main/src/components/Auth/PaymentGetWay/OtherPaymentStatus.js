import React from 'react';
import tikmark from '../../../images/checkmarksuccess.gif'
import Footer from '../../Home/Footer/Footer';
import './payment.css'

const OtherPaymentStatus = () => {
    return (
        <>
            <div className='p-5'>
                <div className="done w-100" >
                    <h1 className='text-success'>Thank You..</h1>
                    <img src={tikmark} alt="payment processing" height={300} />
                </div>
                <p className='payment-warning text-warning p-2 w-50 m-auto rounded'><span className='text-danger text-decoration-underline'>Note:</span> We will confrim your payment by sort massage on your mobile number as soon as possible</p>

            </div>
            <Footer></Footer>
        </>
    );
};

export default OtherPaymentStatus;