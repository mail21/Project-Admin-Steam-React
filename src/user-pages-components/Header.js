import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header(){
   
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Menu Users</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <Link to="/user/profile">
                    <li className="nav-item nav-link">Profile</li>
                </Link>
                <Link to="/user/pesanan">
                    <li className="nav-item nav-link">Pesanan</li>
                </Link>
                <Link to="/user/booking">
                    <li className="nav-item nav-link">Booking</li>
                </Link>
                </ul>
            </div>
        </nav>
        </>
    )
}