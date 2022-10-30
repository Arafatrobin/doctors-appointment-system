import React from 'react';
import mri from './images/mri.png';
import fristaid from './images/first-aid-kit.png';
import ctscan from './images/ct-scan.png';
import ancology from './images/oncology.png';
import checkup from './images/medical-checkup.png';
import surgery from './images/robotic-surgery.png';
import './BookTests.css';
import { Link } from 'react-router-dom';


const BookTests = () => {
    return (
        <div>
            <div className='tests-container'>
                <div className="row g-2 p-5">
                    <div className="col-4">
                        <div className="test d-flex flex-column justufy-content-center align-items-center p-5">
                            <img src={mri} alt="mri" width="56px" />
                            <h2 className='mt-3'>MRI scans</h2>
                            <span className='mb-2'>tk 3,150 - 3,999</span>
                            <button className="btn btn-danger book-btn"><Link to="/testbook/MRI scans">Book Now</Link></button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="test d-flex flex-column justufy-content-center align-items-center p-5">
                            <img src={fristaid} alt="mri" width="56px" />
                            <h2 className='mt-3'>Master Health Checkup Packages</h2>
                            <span className='mb-2'>tk 2,500 - 8,000</span>
                            <button className="btn btn-danger book-btn"><Link to="/testbook/Master Health Checkup">Book Now</Link></button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="test d-flex flex-column justufy-content-center align-items-center p-5">
                            <img src={ctscan} alt="mri" width="56px" />
                            <h2 className='mt-3'>CT scans</h2>
                            <span className='mb-2'>tk 1,499 - 2,499</span>
                            <button className="btn btn-danger book-btn"><Link to="/testbook/CT scan">Book Now</Link></button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="test d-flex flex-column justufy-content-center align-items-center p-5">
                            <img src={ancology} alt="mri" width="56px" />
                            <h2 className='mt-3'>PET-CT</h2>
                            <span className='mb-2'>tk 13,000</span>
                            <button className="btn btn-danger book-btn"><Link to="/testbook/PET-CT">Book Now</Link></button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="test d-flex flex-column justufy-content-center align-items-center p-5">
                            <img src={checkup} alt="mri" width="56px" />
                            <h2 className='mt-3'>Preventive Health Checkup Packages</h2>
                            <span className='mb-2'>tk 900 - 2,300</span>
                            <button className="btn btn-danger book-btn"><Link to="/testbook/Preventive Health Checkup">Book Now</Link></button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="test d-flex flex-column justufy-content-center align-items-center p-5">
                            <img src={surgery} alt="mri" width="56px" />
                            <h2 className='mt-3'>Surgeries</h2>
                            <span className='mb-2 ts-4 bg-primary p-2 rounded'>20% OFF</span>
                            <button className="btn btn-danger book-btn"><Link to="/testbook/Surgeries">Book Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookTests;