import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Banner.css'
import requests from '../../Request';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        // fetchData();
        
    },[]);
    

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

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
                <h1 className="banner__description">
                    {truncate(`this is description

                    this is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is description
                    this is descriptionthis is descriptionthis is description`, 150)}
                </h1>
            </div>

            <div className="banner__fadeBottom" />
        </header>
    )
   
}

export default Banner