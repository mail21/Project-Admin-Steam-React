import React from 'react';
import './styleProfile.css'
import {Link} from 'react-router-dom'

export default function Profile({user}){
    const styleContainer = {
        backgroundColor : "lightgray",
        width : "80%",
        margin : "auto"
    }
    return (
        <div className="mt-4 p-5" style={styleContainer}>
            <Link to="/user/edit-profile">
                <button type="button" className="btn btn-outline-success">Edit Profile</button>
            </Link>
            <br/>
            <br/>
            <table cellPadding="10">
                <tbody>
                <tr>
                    <td>Nama </td>
                    <td>: {user.fullName}</td>
                </tr>
                <tr>
                    <td>Username </td>
                    <td>: {user.username}</td>
                </tr>
                <tr>
                    <td>Email </td>
                    <td>: {user.email}</td>
                </tr>
                <tr>
                    <td>Jenis Kelamin </td>
                    <td>: {user.jenisKelamin}</td>
                </tr>
                <tr>
                    <td>Tanggal Lahir </td>
                    <td>: {user.tanggalLahir}</td>
                </tr>
                <tr>
                    <td>Kota Sekarang </td>
                    <td>: {user.kotaSekarang}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
