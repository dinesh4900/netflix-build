import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUp.css'

function SignUp() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message)
        })
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message)
        }
        )
    }
    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="email" type="email" />
                <input ref={passwordRef} placeholder="password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4 className="signup__btmTxt">
                    <span className="signup__gray">New to netflix? </span>
                    <span className="signup__link" onClick={register}>Sign up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUp
