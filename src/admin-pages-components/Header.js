import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  function LogOut() {
    localStorage.clear();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/admin-page">
          <span className="navbar-brand">Menu Admin</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link to="/admin-page/profile">
              <li className="nav-item nav-link">Profile</li>
            </Link>
            <Link to="/admin-page/pesanan/done">
              <li className="nav-item nav-link">Pesanan</li>
            </Link>
            <Link to="/">
              <li className="nav-item nav-link" onClick={LogOut}>
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
