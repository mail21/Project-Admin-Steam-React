import React, { useEffect, useState } from "react";
import Header from "./Header";
import Profile from "./profile-components/Profile";
import FormEditProfile from "./profile-components/FormEditProfile";
import { Route, useHistory } from "react-router-dom";
import TablePesanan from "./pesanan-components/TablePesanan";

function Hai({ username }) {
  return (
    <h1 className="mt-5" style={{ textAlign: "center" }}>
      Selamat Datang {username}
    </h1>
  );
}

function AdminPage() {
  let history = useHistory();
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let username = localStorage.getItem("username");
    if (isLoggedIn != "true") {
      history.push("/admin");
    }
    async function fetchAdmin() {
      let getAdmin = await fetch("http://localhost:8000/admin");
      let dataFromFetch = await getAdmin.json();
      dataFromFetch.map((el) => {
        if (el.username == username) {
          setAdmin(el);
        }
      });
    }
    fetchAdmin();
  }, []);
  return (
    <>
      <Header />
      <Route path="/admin-page/profile">
        <Profile username={admin.username} email={admin.email} />
      </Route>
      <Route path="/admin-page" exact>
        <Hai username={admin.username} />
      </Route>
      <Route path="/admin-page/pesanan">
        <TablePesanan />
      </Route>
      <Route path="/admin-page/edit-profile">
        <FormEditProfile password={admin.password} username={admin.username} email={admin.email} id={admin.id} />
      </Route>
    </>
  );
}

export default AdminPage;
