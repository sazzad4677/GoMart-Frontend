import React from 'react';
import Hero from '../components/Home/Hero/Hero';
// import NavMenu from '../components/Home/Nav/NavMenu';
import Navigation from '../components/Home/Nav/Nav';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            {/* <NavMenu /> */}
        </div>
    );
};

export default Home;