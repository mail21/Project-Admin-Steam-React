import React from 'react';
import './App.css';
import Header from './components/Header';
import Pesanan from './components/pesanan-components/Pesanan';
import Profile from './components/profile-components/Profile';
import Booking from './components/booking-components/Booking';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        
        <Router>
          <Header />
          <Switch>
            <Route path="/pesanan">
              <Pesanan />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/" exact>
              <h1>Home</h1>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
