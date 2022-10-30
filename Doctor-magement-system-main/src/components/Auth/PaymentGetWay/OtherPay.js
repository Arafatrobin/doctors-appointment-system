import React from 'react';
import { Link } from 'react-router-dom';
import bikash from '../../../images/bkash.png';
import nagad from '../../../images/nagad.png';
import rocket from '../../../images/rocket.png';

const OtherPay = () => {
    return (
        <>
            <div className="mt-5 mb-3">
                <h4 className='text-decoration-underline text-start'>Chosse another Option:</h4>
                <div className="row g-5 mt-3">
                    <div className="col-4">
                        <div className="bikash cont">
                            <Link to="/bankingPay">
                                <img className='rounded image' src={bikash} alt="" height={150} width={150} />
                                <div class="overlay">
                                    <div class="text">Pay with Bkash</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="nagad cont">
                            <Link to="/bankingPay">
                                <img className='rounded image' src={nagad} alt="" height={150} width={150} />
                                <div class="overlay">
                                    <div class="text">Pay with Nagad</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="rocket cont">
                            <Link to="/bankingPay">
                                <img className='rounded image' src={rocket} alt="" height={150} width={150} />
                                <div class="overlay">
                                    <div class="text">Pay with Rocket</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtherPay;