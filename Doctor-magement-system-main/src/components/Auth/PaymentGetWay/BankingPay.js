import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';

const BankingPay = () => {
    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-6 m-auto">
                    <div className="payment-from text-start">
                        <form action="" className='w-50'>
                            <label htmlFor="mobile-no">Mobile No:</label>
                            <input type="text" className='form-control mt-2' id='mobile-no' placeholder='017********' />
                            <br />
                            <label htmlFor="mobile-no">Transaction ID:</label>
                            <input type="text" className='form-control mt-2' id='mobile-no' placeholder='lBiM87Enq' />
                            <br />
                            <Link to="/otherPaymentStatus"><button className='btn btn-warning'>Confrim</button> </Link>
                        </form>
                    </div>
                </div>
                <div className="col-5 text-start">
                    <div className="payment-guid">
                        <h4 className='text-decoration-underline text-danger mb-3'>Please use following steps to pay now:   </h4>
                        <ol>
                            <li>Go to Mobile Banking Menu by dialing</li>
                            <li>Choose 'Payment' option by pressing</li>
                            <li>Enter our Merchant wallet number : 017********</li>
                            <li>Enter BDT. amount you have to pay : xxxx</li>
                            <li>Enter a reference against your payment : your name</li>
                            <li>Enter the counter number : 1</li>
                            <li>Now enter your PIN to confirm: xxxx</li>
                            <li>Done! You will get a confirmation SMS</li>
                            <li>Enter your wallet/ contact number and transaction ID in the form and submit.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default BankingPay;