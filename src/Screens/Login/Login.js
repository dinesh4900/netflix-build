import React, { useState } from 'react';
import SignUp from '../SignUp';

import './Login.css'

function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="login"> 
            <div className="loginScreen__background">
                <img 
                    className="login__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" 
                />

                <button onClick={() => setSignIn(true)} className="login__button">Sign IN</button>    

                <div className="login__gradient"></div>
            </div>
            <div className="login__body">
                {signIn ?
                    (<SignUp />
                ):( 
                    <>
                        <h1>Watch Movies and stuff anywhere</h1>
                        <h2>Watch anywhere can see it anytime</h2>
                        <h3>ready to watch? enter your eamil to create or restart your membership</h3>

                        <div className="login__input">
                            <form>
                                <input type="email" placeholder="enter email address" />
                                <button onClick={() => setSignIn(true)} className="login__getStarted">get started</button>
                            </form>
                        </div>
                    </>
                )}
               
            </div>
        </div>
    )
}

export default Login
