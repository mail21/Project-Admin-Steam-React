import React, { useState } from "react";

export default function SignUp (){

        function onRegistrasiSubmit(e){
            let data = {
                "fullName": e.target[1].value,
                "username": e.target[0].value,
                "email": e.target[5].value,
                "password": e.target[6].value,
                "jenisKelamin": e.target[2].value,
                "kotaSekarang": e.target[3].value,
                "tanggalLahir": e.target[4].value
            }
            
            fetch('http://localhost:8000/users',{
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body : JSON.stringify(data)
            }).then( res => console.log(res))
        }

        return (
            <form className="mt-5" onSubmit={onRegistrasiSubmit}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" required />
                </div>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full name" required />
                </div>

                <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <input type="text" className="form-control" placeholder="Jenis Kelamin" required/>
                </div>

                <div className="form-group">
                    <label>Kota Sekarang</label>
                    <input type="text" className="form-control" placeholder="Kota Sekarang" required/>
                </div>
                
                <div className="form-group">
                    <label>Tanggal Lahir</label>
                    <input type="date" className="form-control" required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
            </form>
        );
    
}
