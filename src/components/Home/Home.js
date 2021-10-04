import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;