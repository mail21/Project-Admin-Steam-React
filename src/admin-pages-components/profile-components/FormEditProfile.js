import React, { useEffect, useState } from "react";
import "./styleProfile.css";
import { Form, Button } from "react-bootstrap";

export default class FormEditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      email: props.email,
      id: props.id,
    };
  }

  submit = (e) => {
    let data = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: this.props.password,
    };

    fetch(`http://localhost:8000/admin/${this.props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => console.log(res));
  };

  change = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    let { username, email, jenisKelamin, kotaSekarang, tanggalLahir } = this.state;

    return (
      <div className="container-edit mt-5 p-5">
        <h1 style={{ textAlign: "center" }}>Form Edit Profile</h1>
        <Form onSubmit={this.submit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" type="text" placeholder="Username" value={username} onChange={this.change} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={this.change} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

// "fullName"
//       "username"
//       "email"
//       "password"
//       "jenisKelamin"
//       "kotaSekarang"
//       "tanggalLahir"
