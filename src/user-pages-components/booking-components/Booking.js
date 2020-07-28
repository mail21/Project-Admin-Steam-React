import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Booking({ id }) {
  let history = useHistory();

  function onBack() {
    history.goBack();
  }

  function onSubmit(e) {
    e.preventDefault();
    let date = new Date();

    let data = {
      idUser: id,
      namaPelanggan: e.target[0].value,
      alamatLengkap: e.target[1].value,
      nomorTelepon: e.target[2].value,
      waktuSteam: e.target[3].value + ` ${date.getHours()}:${date.getMinutes()}`,
      jenisMobil: e.target[4].value,
      jenisSteam: e.target[5].value,
      pesan: e.target[6].value,
      status: "On Progress",
    };

    fetch("http://localhost:8000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => alert("Berhail Booking"));

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    e.target[5].value = "";
    e.target[6].value = "";
  }

  return (
    <div className="container-edit mt-5 p-5">
      <h1 style={{ textAlign: "center" }}>Form Edit Profile</h1>
      <hr />
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicNama">
          <Form.Label>Nama Pelanggan </Form.Label>
          <Form.Control name="namaPelanggan" type="text" placeholder="Masukkan Nama Pelanggan" />
        </Form.Group>

        <Form.Group controlId="formBasicNomor">
          <Form.Label>Nomor Telepon</Form.Label>
          <Form.Control name="nomorTelepon" type="text" placeholder="Enter Nomor Telepon" />
        </Form.Group>

        <Form.Group controlId="formBasicAlamat">
          <Form.Label>Alamat Lengkap</Form.Label>
          <Form.Control name="alamatLengkap" type="text" placeholder="Enter Alamat Lengkap" />
        </Form.Group>

        <Form.Group controlId="formBasicTGL">
          <Form.Label>Waktu Steam</Form.Label>
          <Form.Control name="waktuSteam" type="date" />
        </Form.Group>

        <Form.Group controlId="jenisMobil">
          <Form.Label>Jenis Mobil</Form.Label>
          <Form.Control as="select">
            <option>Kecil</option>
            <option>Sedang</option>
            <option>Besar</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="jenisSteam">
          <Form.Label>Jenis Steam</Form.Label>
          <Form.Control as="select">
            <option>Biasa</option>
            <option>Normal</option>
            <option>Spesial</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="tx">
          <Form.Label>Pesan</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mr-3">
          Booking
        </Button>

        <Button variant="primary" onClick={onBack}>
          Back
        </Button>
      </Form>
    </div>
  );
}

// "namaPelanggan": "Armanditto",
//       "alamatLengkap": "Gang Kejora No 30 Ciledug, Jakarta Selatan",
//       "nomorTelepon": "086346732524",
//       "waktuSteam": "14/07/2020 13:30",
//       "jenisMobil": "Sedang",
//       "jenisSteam": "Normal",
//       "pesan": "Cukup Sekian dan Terimakasih"
