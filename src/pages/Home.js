import React from 'react';
import Banner from '../components/Home/Hero/Banner';
// import NavMenu from '../components/Home/Nav/NavMenu';
import Navigation from '../components/Home/Nav/Nav';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            {/* <NavMenu /> */}
        </div>
    );
};

export default Home;