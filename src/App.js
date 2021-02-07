import React from 'react';

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import Login from './Screens/Login/Login';



function App() {
  const user = null;
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
