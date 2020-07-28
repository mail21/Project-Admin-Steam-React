import React from "react";
import "./App.css";
import UsersPage from "./user-pages-components/UsersPage";
import LoginPage from "./login-pages-components/LoginPage";
import AdminLogin from "./login-pages-components/AdminLogin";
import AdminPage from "./admin-pages-components/AdminPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user">
            <UsersPage />
          </Route>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/admin-page" component={AdminPage} />
          <Route path="/admin" component={AdminLogin} />
          <Route path={["/sign-in", "/sign-up"]} component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
