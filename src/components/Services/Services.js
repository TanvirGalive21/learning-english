import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./Services.css";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("servicedb.json")
        .then(res => res.json())
        .then(data => setServices(data?.services))
    }, [])
    // console.log(services)
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="container all-teams">
                <div className="all-team">
                    <h1>Our Services</h1>
                </div>
                <div className="teams">
                    <div className="row">
                        {services?.map((service) => (
                            <div className="col-md-4">
                                <div className="cart">
                                    <div className="cart-details">
                                    <img className="w-50" src={service.img} alt="" />
                                    </div>
                                    <div className="text-area">
                                    <h4 className="text-primary">{service.title}</h4>
                                    <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
             </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;