import React from 'react';

import '../App.css'
const Home = ({logoName}) => {
    return (
        <div>
            <div className='background-top'>
                <img src={logoName} alt="banner" className='banner-name' />
            </div>
        </div>
    );
};

export default Home;