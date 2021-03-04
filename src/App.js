import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import Login from './Screens/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login,logout, selectUser } from './features/userSlice';
import {useDispatch, useSelector} from "react-redux"
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else{
        // logged out
        dispatch(logout());
      }
    })


    return unsubscribe
  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login /> 
        ):(
          <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;