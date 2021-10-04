import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            <MenuBar></MenuBar>
            <div className="col-md-6">
              <h1 className="title">
                LearningEnglish Center
              </h1>
              <p className="text-white text-center mt-3">
              Our English Learning Center offers group and personal lessons in English and other modern languages for all ages and levels of knowledge.
              </p>
              <button className="mt-3 about-btn">About Us</button>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
};

export default Banner;