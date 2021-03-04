import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import Login from './Screens/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // logged in
        console.log(userAuth);
      } else{
        // logged out
      }
    })


    return unsubscribe
  },[]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login /> 
        ):(
          <Switch>
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