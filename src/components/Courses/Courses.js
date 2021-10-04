import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Courses.css"

const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("coursedb.json")
        .then(res => res.json())
        .then(data => setCourses(data?.courses))
    },[]);
    // console.log(courses)
    return (
        <div class="section-padding grey-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="section-title">
                            <h2>Our Courses</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                                {
                                    courses.map((course) => (<div className="col-md-3 ">
                                        <div className="single-service-item">
                                            <div className="service-content">
                                                <img className="w-75" src={course.img} alt=""/>
                                                <h3>{course.title}</h3>
                                                <p>{course.description}</p>
                                                <Link to={`/details/${course.id}`}>
                                                <button className="service-more-btn">See more <i class="fa fa-long-arrow-right"></i></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                     
                </div>
            </div>
        </div>
    );
};

export default Courses;