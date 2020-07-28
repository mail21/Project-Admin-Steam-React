import React from "react";
import "./styleProfile.css";
import { Link } from "react-router-dom";

export default function Profile({ username, email }) {
  const styleContainer = {
    backgroundColor: "lightgray",
    width: "80%",
    margin: "auto",
  };

  console.log(username);
  return (
    <div className="mt-4 p-5" style={styleContainer}>
      <Link to="/admin-page/edit-profile">
        <button type="button" className="btn btn-outline-success">
          Edit Profile
        </button>
      </Link>
      <br />
      <br />
      <table cellPadding="10">
        <tbody>
          <tr>
            <td>Username </td>
            <td>: {username}</td>
          </tr>
          <tr>
            <td>Email </td>
            <td>: {email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
