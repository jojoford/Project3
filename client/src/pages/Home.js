import React from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className="container">
            {/* <Nav></Nav> */}
            <Carousel></Carousel>
            <About></About>
        </div>
    )
}

export default Home;