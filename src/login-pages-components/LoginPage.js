import React from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styleLogin.css';
import { useHistory, Route, Link } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";

function LoginPage() {

  const history = useHistory();

  React.useEffect(()=>{
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(isLoggedIn)
    if(isLoggedIn){
      history.push('/user')
    }
  },[])

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to={"/sign-in"}>Menu Login</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
                </ul>
            </div>
        </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;