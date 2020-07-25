import React from 'react';
import './styleProfile.css'
import {Link} from 'react-router-dom'

export default function Profile({match}){
    const styleContainer = {
        backgroundColor : "lightgray",
        width : "80%",
        margin : "auto"
    }
    console.log(match)
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
                    <td>: Ismail</td>
                </tr>
                <tr>
                    <td>Username </td>
                    <td>: Ismail</td>
                </tr>
                <tr>
                    <td>Email </td>
                    <td>: Ismail</td>
                </tr>
                <tr>
                    <td>Jenis Kelamin </td>
                    <td>: Ismail</td>
                </tr>
                <tr>
                    <td>Tanggal Lahir </td>
                    <td>: Ismail</td>
                </tr>
                <tr>
                    <td>Kota Sekarang </td>
                    <td>: Ismail</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
