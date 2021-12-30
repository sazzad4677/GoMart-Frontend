import React from 'react';
import Statistics from './Statistics';
import WelcomePanel from './WelcomePanel';

const Welcome = () => {
    return (
        <div className="container mx-auto z-10">
          <WelcomePanel />  
          <Statistics/>
        </div>
    );
};

export default Welcome;