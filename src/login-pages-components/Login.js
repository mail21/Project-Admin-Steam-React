import React, { Component } from "react";
import {useHistory} from 'react-router-dom';

export default function Login (){

    let history = useHistory()

    function submitLogin(e){
        e.preventDefault();
        let email = e.target[0].value;
        let password = e.target[1].value;

        async function fecthData(){
            let req = await fetch('http://localhost:8000/users')
            let dataFetch = await req.json();
            let adakah = dataFetch.filter(el => el.email == email && el.password == password)
            if(adakah.length > 0){
                history.push('/user');
                localStorage.setItem('isLoggedIn', true); 
                localStorage.setItem('username', adakah[0].username);  
            }else{
                alert("Kombinasi email dan password tidak tepat")
            }
        }
        fecthData();
        console.log(history)
    }

        return (
            <form onSubmit={submitLogin}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            
        );
}