import React from 'react';
import './Banner.css'

function Banner() {
    return(
        <header 
            className="banner" 
            style={{
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">This is Test Description</h1>
            </div>

            <div className="banner__fadeBottom" />
        </header>
    )
   
}

export default Banner