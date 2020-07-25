import React from 'react';
import './App.css';
import Header from './components/Header';
import Pesanan from './components/pesanan-components/Pesanan';
import Profile from './components/profile-components/Profile';
import Booking from './components/booking-components/Booking';


function App() {
  
  return (
    <div className="App">
        <Header />
        <Profile />
        <Pesanan />
        <Booking />
    </div>
  );
}

export default App;
