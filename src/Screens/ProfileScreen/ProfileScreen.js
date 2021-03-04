import React from 'react';
import {useSelector} from "react-redux"
import { selectUser } from "../../features/userSlice"
import NavBar from '../../Components/NavBar/NavBar';
import './ProfileScreen.css'
import { auth } from '../../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <NavBar />
            <div className="profileScreen__body">
                <h1>Edit profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                        alt="" 
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>plans</h3>
                            <button onClick={() => auth.signOut()} className="profileScreen__signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
