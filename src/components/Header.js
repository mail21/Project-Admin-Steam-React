import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Menu Users</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <Link to="/profile">
                    <li className="nav-item"><a className='nav-link'>Profile</a></li>
                </Link>
                <Link to="/pesanan">
                    <li class="nav-item"><a className='nav-link'>Pesanan</a></li>
                </Link>
                <Link to="/booking">
                    <li class="nav-item"><a className='nav-link'>Booking</a></li>
                </Link>
                </ul>
            </div>
        </nav>
        </>
    )
}