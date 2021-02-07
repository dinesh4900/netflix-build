import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className="login"> 
            <div className="loginScreen__background">
                <img 
                    className="login__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="" 
                />

                <button className="login__button">Sign IN</button>    

                <div className="login__gradient"></div>
            </div>
        </div>
    )
}

export default Login
