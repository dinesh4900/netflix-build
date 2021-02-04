import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
    const [show, handleShow]  = useState(false);

    
    const transitionNavBar = (event) => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };


    useEffect((event) => {
        window.addEventListener("scroll", transitionNavBar);
        return() => window.removeEventListener('scroll', transitionNavBar);
    },[]);


    return (
        // show then transition occurs
        <div className={`navBar ${show && "navBar__black"}`}> 
           <div className="navBar__contents">
                <img className="navBar_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
                <img className="navBar_avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="logo" />
           </div>
        </div>
    )
}

export default NavBar
