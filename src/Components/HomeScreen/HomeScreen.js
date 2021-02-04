import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import './HomeScreen.css';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <NavBar />
            <Banner />
            {/* rows */}
        </div>
    )
}

export default HomeScreen
