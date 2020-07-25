import React from 'react'
import './styleProfile.css'
import {Form,Button } from 'react-bootstrap';

export default function FormEditProfile(){

    function submit(e){
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div className="container-edit mt-5 p-5">
            <h1 style={{textAlign:"center"}}>Form Edit Profile</h1>
            <Form onSubmit={submit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicNama">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Nama Lengkap" />
            </Form.Group>

            <Form.Group controlId="formBasicJK">
                <Form.Label>Jenis kelamin</Form.Label>
                <Form.Control type="text" placeholder="Jenis Kelamin" />
            </Form.Group>

            <Form.Group controlId="formBasicKota">
                <Form.Label>Kota</Form.Label>
                <Form.Control type="text" placeholder="Kota" />
            </Form.Group>

            <Form.Group controlId="formBasicTGL">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control type="date" value={"2014-02-09"}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>

        </div>
    )
}

// "fullName"
//       "username"
//       "email"
//       "password"
//       "jenisKelamin"
//       "kotaSekarang"
//       "tanggalLahir"