import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Row({ data, id, namaPelanggan, alamatLengkap, nomorTelepon, waktuSteam, jenisMobil, jenisSteam, pesan, status }) {
  let history = useHistory();
  let onProgress = false;
  if (status === "On Progress") {
    onProgress = true;
  }

  const changeStatus = (e) => {
    let id = 0;
    async function asyncChange() {
      let dataFromIdChange = await data.filter((el) => {
        if (e.target.dataset.id == el.id) {
          el.status = "Done";
          id = el.id;
          return el;
        }
      });
      fetch(`http://localhost:8000/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataFromIdChange[0]),
      }).then(() => {
        alert("Sudah Selesai");
        history.push("/admin-page/pesanan/onproggres");
      });
    }
    asyncChange();
  };

  return (
    <tr>
      <td>{namaPelanggan}</td>
      <td>{alamatLengkap}</td>
      <td>{nomorTelepon}</td>
      <td>{waktuSteam}</td>
      <td>{jenisMobil}</td>
      <td>{jenisSteam}</td>
      <td>{pesan}</td>
      <td>{status}</td>
      {onProgress ? (
        <td>
          <button data-id={id} type="button" className="btn btn-primary" onClick={changeStatus}>
            Done
          </button>
        </td>
      ) : (
        ""
      )}
    </tr>
  );
}

function TablePesanan() {
  let i = 0;
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Done");
  const [idChange, setIdChange] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:8000/booking");
      response = await response.json();
      console.log(response);
      setData(response);
    }
    fetchMyAPI();
  }, []);

  let onProgress = false;
  if (status === "On Progress") {
    onProgress = true;
  }

  let style1 = { width: "90%", margin: "auto" };
  let styleBody = { backgroundColor: "lightgray", width: "90%", margin: "auto" };
  let styleLink = { backgroundColor: "lightblue" };

  return (
    <div className="body mt-5" style={styleBody}>
      <div className="d-flex justify-content-around" style={styleLink}>
        <Link style={{ color: "black", padding: "10px" }} to="/admin-page/pesanan/done" onClick={() => setStatus("Done")}>
          <h2>Pesanan Done</h2>
        </Link>

        <Link style={{ color: "black", padding: "10px" }} to="/admin-page/pesanan/onproggres" onClick={() => setStatus("On Progress")}>
          <h2>Pesanan On Progress</h2>
        </Link>
      </div>
      <h1 style={{ textAlign: "center" }} className="mt-3">
        Pesanan Selesai
      </h1>
      <div className="mt-4" style={style1}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nama Pelanggan</th>
              <th scope="col">Alamat Lengkap</th>
              <th scope="col">No telepon</th>
              <th scope="col">Waktu Steam</th>
              <th scope="col">Jenis Mobil</th>
              <th scope="col">Jenis Steam</th>
              <th scope="col">Pesan</th>
              <th scope="col">Status</th>
              {onProgress ? <th scope="col">Opsi</th> : ""}
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              if (el.status == "Done" && status == "Done") {
                return <Row data={data} id={el.id} key={i++} namaPelanggan={el.namaPelanggan} alamatLengkap={el.alamatLengkap} nomorTelepon={el.nomorTelepon} waktuSteam={el.waktuSteam} jenisMobil={el.jenisMobil} jenisSteam={el.jenisSteam} pesan={el.pesan} status={el.status} />;
              } else if (el.status == "On Progress" && status == "On Progress") {
                return <Row data={data} id={el.id} key={i++} namaPelanggan={el.namaPelanggan} alamatLengkap={el.alamatLengkap} nomorTelepon={el.nomorTelepon} waktuSteam={el.waktuSteam} jenisMobil={el.jenisMobil} jenisSteam={el.jenisSteam} pesan={el.pesan} status={el.status} />;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablePesanan;
