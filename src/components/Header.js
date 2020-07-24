import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

export default function Header(){
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Menu Users</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#pesanan">Pesanan</Nav.Link>
            <Nav.Link href="#booking">Booking</Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}