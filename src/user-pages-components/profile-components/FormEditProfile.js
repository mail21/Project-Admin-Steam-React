import React, {useEffect,useState} from 'react'
import './styleProfile.css'
import {Form,Button } from 'react-bootstrap';

export default class FormEditProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fullName: props.fullName,
            username: props.username,
            email: props.email,
            jenisKelamin: props.jenisKelamin,
            kotaSekarang: props.kotaSekarang,
            tanggalLahir: props.tanggalLahir,
            id : props.id
        }
    }

    submit = (e)=>{
        let data = {
            "fullName": e.target[2].value,
            "username": e.target[0].value,
            "email": e.target[1].value,
            "password": this.props.password,
            "jenisKelamin": e.target[3].value,
            "kotaSekarang": e.target[4].value,
            "tanggalLahir": e.target[5].value
        }
        
        fetch(`http://localhost:8000/users/${this.props.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':"application/json"
            },
            body : JSON.stringify(data)
        }).then( res => console.log(res))

    }

    change = (e)=>{
        let {name , value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        let {fullName,
            username,
            email,
            jenisKelamin,
            kotaSekarang,
            tanggalLahir} = this.state

        return (
            <div className="container-edit mt-5 p-5">
                <h1 style={{textAlign:"center"}}>Form Edit Profile</h1>
                <Form onSubmit={this.submit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Username" value={username} onChange={this.change}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={this.change} />
                </Form.Group>

                <Form.Group controlId="formBasicNama">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control name="fullName" type="text" placeholder="Nama Lengkap" value={fullName} onChange={this.change} />
                </Form.Group>

                <Form.Group controlId="formBasicJK">
                    <Form.Label>Jenis kelamin</Form.Label>
                    <Form.Control name="jenisKelamin" type="text" placeholder="Jenis Kelamin" value={jenisKelamin} onChange={this.change} />
                </Form.Group>

                <Form.Group controlId="formBasicKota">
                    <Form.Label>Kota</Form.Label>
                    <Form.Control name="kotaSekarang" type="text" placeholder="Kota" value={kotaSekarang} onChange={this.change} />
                </Form.Group>

                <Form.Group controlId="formBasicTGL">
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control name="tanggalLahir" type="date" value={tanggalLahir} onChange={this.change} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

            </div>
        )
    }
}

// "fullName"
//       "username"
//       "email"
//       "password"
//       "jenisKelamin"
//       "kotaSekarang"
//       "tanggalLahir"