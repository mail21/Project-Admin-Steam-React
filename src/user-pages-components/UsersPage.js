import React from 'react';
import Header from './Header';
import Pesanan from './pesanan-components/Pesanan';
import Profile from './profile-components/Profile';
import Booking from './booking-components/Booking';
import FormEditProfile from './profile-components/FormEditProfile';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function Hai(){
    return <h1 className="mt-5" style={{textAlign:"center"}}>Selamat Datang</h1>
}

function UsersPage() {
  return (
    <div className="UsersPage">
            <Header />
            <Route path="/user" exact component={Hai} />
            <Route path="/user/pesanan" component={Pesanan}/>
            <Route path="/user/profile" component={Profile}/>
              <Route path="/user/edit-profile">
                <FormEditProfile />
              </Route>
            <Route path="/user/booking" component={Booking}/>
    </div>
  );
}

export default UsersPage;
