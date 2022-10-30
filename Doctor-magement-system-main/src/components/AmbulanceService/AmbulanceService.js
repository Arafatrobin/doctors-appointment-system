import React, { useState } from "react";
import Footer from "../Home/Footer/Footer";
import "./AmbulanceService.css";
const AmbulanceService = () => {
  const fakeData = [
    {
      name: "AM-01 (AC)",
      driverName: "Asif Ali",
      phone: "012548751",
      price: "৳50/hr",
      image:
        "https://jonyambulanceservice.com/wp-content/uploads/2020/11/Ambulance-Van-PNG-Pic-1.png",
      age: "35",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-02 (Non-AC)",
      driverName: "Imran",
      phone: "012548752",
      price: "৳15/hr",
      image:
        "https://jonyambulanceservice.com/wp-content/uploads/2020/11/Ambulance-Van-PNG-Pic-1.png",
      age: "25",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-03 (AC)",
      driverName: "Akram",
      phone: "012548753",
      price: "৳55/hr",
      image:
        "https://jonyambulanceservice.com/wp-content/uploads/2020/11/Ambulance-Van-PNG-Pic-1.png",
      age: "27",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-04 (AC)",
      driverName: "Shumon",
      phone: "012548754",
      price: "৳45/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "33",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-05 (Non-AC)",
      driverName: "Tusar",
      phone: "0125487556",
      price: "৳15/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "23",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-06 (AC)",
      driverName: "Joinul",
      phone: "012548757",
      price: "৳55/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "30",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-07 (Non-AC)",
      driverName: "Forhad",
      phone: "012548758",
      price: "৳17/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "28",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-08 (AC)",
      driverName: "Shujon",
      phone: "012548759",
      price: "৳47/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "26",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-09 (AC)",
      driverName: "Mahamud",
      phone: "012548710",
      price: "৳57/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "40",
      link: "https://www.google.com/",
      location: "Dhaka"
    },
    {
      name: "AM-02 (Non-AC)",
      driverName: "Monir",
      phone: "012548752",
      price: "৳15/hr",
      image:
        "https://jonyambulanceservice.com/wp-content/uploads/2020/11/Ambulance-Van-PNG-Pic-1.png",
      age: "25",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-03 (AC)",
      driverName: "Mokbul",
      phone: "012548753",
      price: "৳55/hr",
      image:
        "https://jonyambulanceservice.com/wp-content/uploads/2020/11/Ambulance-Van-PNG-Pic-1.png",
      age: "27",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-04 (AC)",
      driverName: "Thantu",
      phone: "012548754",
      price: "৳45/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "33",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-05 (Non-AC)",
      driverName: "Raisul",
      phone: "0125487556",
      price: "৳15/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "23",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-06 (AC)",
      driverName: "Joinul",
      phone: "012548757",
      price: "৳55/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "30",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-07 (Non-AC)",
      driverName: "Fuad",
      phone: "012548758",
      price: "৳17/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "28",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-08 (AC)",
      driverName: "Bitul",
      phone: "012548759",
      price: "৳47/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "26",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-09 (AC)",
      driverName: "Ratul",
      phone: "012548710",
      price: "৳57/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "40",
      link: "https://www.google.com/",
      location: "Rajshahi"
    },
    {
      name: "AM-02 (Non-AC)",
      driverName: "Rifat",
      phone: "012548752",
      price: "৳15/hr",
      image:
        "https://jonyambulanceservice.com/wp-content/uploads/2020/11/Ambulance-Van-PNG-Pic-1.png",
      age: "25",
      link: "https://www.google.com/",
      location: "Chittagong"
    },
    {
      name: "AM-03 (AC)",
      driverName: "Fozlu",
      phone: "012548753",
      price: "৳55/hr",
      image:
        "https://jonyambulanceservice.com/wp-content/uploads/2020/11/Ambulance-Van-PNG-Pic-1.png",
      age: "27",
      link: "https://www.google.com/",
      location: "Chittagong"
    },
    {
      name: "AM-04 (AC)",
      driverName: "Mukul",
      phone: "012548754",
      price: "৳45/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "33",
      link: "https://www.google.com/",
      location: "Chittagong"
    },
    {
      name: "AM-05 (Non-AC)",
      driverName: "Hasan",
      phone: "0125487556",
      price: "৳15/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "23",
      link: "https://www.google.com/",
      location: "Chittagong"
    },
    {
      name: "AM-06 (AC)",
      driverName: "Joinal",
      phone: "012548757",
      price: "৳55/hr",
      image:
        "https://freepngimg.com/download/ambulance/125141-ambulance-png-download-free.png",
      age: "30",
      link: "https://www.google.com/",
      location: "Chittagong"
    },
    {
      name: "AM-07 (Non-AC)",
      driverName: "Fazu",
      phone: "012548758",
      price: "৳17/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "28",
      link: "https://www.google.com/",
      location: "Chittagong"
    },
    {
      name: "AM-08 (AC)",
      driverName: "Lloki",
      phone: "012548759",
      price: "৳47/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "26",
      link: "https://www.google.com/",
      location: "Chittagong"
    },
    {
      name: "AM-09 (AC)",
      driverName: "Mahfuz",
      phone: "012548710",
      price: "৳57/hr",
      image:
        "https://www.nicepng.com/png/detail/210-2100575_ambulance-png-picture-delivery-van.png",
      age: "40",
      link: "https://www.google.com/",
      location: "Chittagong"
    }
  ];

  const [location, setLocation] = useState('');


  const handleSearch = () => {
    const element = document.querySelector(".form-select");
    const location = element.options[element.selectedIndex].value;
    setLocation(location);
  }

  const ambulances = fakeData.filter(product => product.location === location);

  return (
    <div>
      <h2 className="title-text p-2 m-5 rounded-3">
        <h1>Ambulance Service</h1>
      </h2>
      {/* search you location  */}
      <div className="search-area m-auto w-50 d-flex justify-content-center align-items-center">
        <select className="form-select w-100">
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Rajshahi">Rajshahi</option>
        </select>
        <button className="btn btn-success" onClick={handleSearch}>Search</button>
      </div>


      <div className="ambulance-service-a container mt-5">
        <div className="ambulances bg-info p-3">
          <div className="row">


            {/* start */}




            {/* end  */}


            {
              ambulances.length === 0 ? fakeData.map((pd) => (
                <div className="col-md-4 g-3">
                  <div className="ambulance p-3">
                    <div className="ambulance-image">
                      <img className="w-50 rounded-3" src={pd.image} alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="text-dark info p-3">
                        <h6>Model: {pd.name}</h6>
                        <p>price: {pd.price}</p>
                      </div>
                      <div className="text-dark right-info p-3">
                        <h6>Driver: {pd.driverName}</h6>
                        <p>Age: {pd.age}</p>
                        <p>Location: {pd.location}</p>
                      </div>
                    </div>
                    <h4 className="phone-no p-3">Phone No: {pd.phone}</h4>
                    <p className=""><a href={pd.link}><button className="btn btn-success p-2">Get Service</button></a></p>
                  </div>
                </div>
              )) :
                ambulances.map((pd) => (
                  <div className="col-md-4 g-3">
                    <div className="ambulance p-3">
                      <div className="ambulance-image">
                        <img className="w-50 rounded-3" src={pd.image} alt="" />
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="text-dark info p-3">
                          <h6>Model: {pd.name}</h6>
                          <p>price: {pd.price}</p>
                        </div>
                        <div className="text-dark right-info p-3">
                          <h6>Driver: {pd.driverName}</h6>
                          <p>Age: {pd.age}</p>
                          <p>Location: {pd.location}</p>
                        </div>
                      </div>
                      <h4 className="phone-no p-3">Phone No: {pd.phone}</h4>
                      <p className=""><a href={pd.link}><button className="btn btn-success p-2">Get Service</button></a></p>
                    </div>
                  </div>
                ))
            }


            {/* {ambulances.map((pd) => (
              <div className="col-md-4 g-3">
                <div className="ambulance p-3">
                  <div className="ambulance-image">
                    <img className="w-50 rounded-3" src={pd.image} alt="" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-dark info p-3">
                      <h6>Model: {pd.name}</h6>
                      <p>price: {pd.price}</p>
                    </div>
                    <div className="text-dark right-info p-3">
                      <h6>Driver: {pd.driverName}</h6>
                      <p>Age: {pd.age}</p>
                      <p>Location: {pd.location}</p>
                    </div>
                  </div>
                  <h4 className="phone-no p-3">Phone No: {pd.phone}</h4>
                  <p className=""><a href={pd.link}><button className="btn btn-success p-2">Get Service</button></a></p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AmbulanceService;
