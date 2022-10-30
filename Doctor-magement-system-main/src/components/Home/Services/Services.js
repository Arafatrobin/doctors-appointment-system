import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mdrashedulhasan1/docotor-some-fakeData/main/CategoryData.json"
    )
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);
  return (
    <div className="container w-100 prevention-wrapper">
      <div className="prevention d-flex justify-content-center p-5">
      </div>
      <h2 className="title-text">
        <h1 >How to Prevent Covid-19</h1>
      </h2>

      <p>
        Protect yourself and others around you by knowing the facts and taking appropriate precautions.
      </p>

      <div className="p-5">
        {fakeData.map((pd) => (
          <div key={pd.id} className="">
            <div className="d-flex flex-column justify-content-center align-items-center p-3 m-2 w-100">
              <div className="service img">
                <img src={pd.image} alt="category" />
              </div>
              <h4 className="mt-4">{pd.name}</h4>
              <p className="mt-2 text-center w-75">{pd.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
