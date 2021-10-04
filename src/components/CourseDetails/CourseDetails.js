import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./CourseDetails.css"

const CourseDetails = () => {

    
    return (
        <div className="details">
            <MenuBar></MenuBar>
            <div className="course-details">
                <div class="row">   
                        <h1>Welcome To LearnEnglish</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CourseDetails;