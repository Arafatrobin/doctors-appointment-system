import React from 'react';
import './Blogs.css';
import blog1 from '../../../images/blogs/medication.jpg';
import blog2 from "../../../images/blogs/book.jpg";


const Blogs = () => {

    const fakeData = [
        {
            image: blog1,
            title: "REVIEWS & OPINION",
            description: "A physician is a practitioner who practices medicine and seeks to maintain and restore human health through the study, diagnosis, and treatment of the patient's illness or injury.",
            BlogDate: '27 March 2021',
            link: "https://www.google.com/",
        },
        {
            image: blog1,
            title: "REVIEWS & OPINION",
            description: "A physician is a practitioner who practices medicine and seeks to maintain and restore human health through the study, diagnosis, and treatment of the patient's illness or injury.",
            BlogDate: '5 April 2021',
            link: "https://www.google.com/",
        },
        {
            image: blog2,
            title: "REVIEWS & OPINION",
            description: "A physician is a practitioner who practices medicine and seeks to maintain and restore human health through the study, diagnosis, and treatment of the patient's illness or injury.",
            BlogDate: '20 October 2021',
            link: "https://www.google.com/",
        },

    ]

    return (
        <div className="container rounded-3 p-3">
            <h2 style={{ paddingTop: "20px" }} className="title-text p-2 rounded-3">
                <h1>From Our Blog</h1>
            </h2>
            <div className="row  blog-container">
                {
                    fakeData.map(pd => <div className="col-md-4 blogs">
                        <div className="blog">
                            <div className="blog-image">
                                <img className="rounded-3 m-2" src={pd.image} alt="" />
                                <p className=""><a href={pd.link}>Go to blog website</a></p>
                            </div>
                            <h5 className="mt-2">{pd.title}</h5>
                            <p className="mt-2 text-justify fs-6">{pd.description}</p>
                            <div className="blog-date row mt-4">
                                <div className="col-md-7">
                                </div>
                                <div className="col-md-5 text-end">
                                    {pd.BlogDate}
                                </div>

                            </div>
                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Blogs;