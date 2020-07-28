import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function AdminLogin() {
  let history = useHistory();

  function submitLogin(e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    async function fecthData() {
      let req = await fetch("http://localhost:8000/admin");
      let dataFetch = await req.json();
      let adakah = dataFetch.filter((el) => el.email == email && el.password == password);
      if (adakah.length > 0) {
        history.push("/admin-menu");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", adakah[0].username);
      } else {
        alert("Kombinasi email dan password tidak tepat");
      }
    }
    fecthData();
    console.log(history);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/sign-in"}>
          Menu Login
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin"}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitLogin}>
            <h3>Sign In Admin</h3>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
