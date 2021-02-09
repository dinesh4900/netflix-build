import React from 'react';
import './SignUp.css'

function SignUp() {
    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input placeholder="email" type="password" />
                <input placeholder="password" type="password"/>
                <button type="submit">Sign In</button>

                <h4 className="signup__btmTxt">
                    <span className="signup__gray">New to netflix? </span>
                    <span className="signup__link">Sign up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp
