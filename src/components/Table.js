import React,{useState,useEffect} from 'react';

function Row({namaPelanggan,
    alamatLengkap,
    nomorTelepon,
    waktuSteam,
    jenisMobil,
    jenisSteam,
    pesan ,
    status}){
    return(
        <tr>
           <td>{namaPelanggan}</td>
           <td>{alamatLengkap}</td>
           <td>{nomorTelepon}</td>
           <td>{waktuSteam}</td>
           <td>{jenisMobil}</td>
           <td>{jenisSteam}</td>
           <td>{pesan}</td>
           <td>{status}</td>
       </tr>
    );
}

// namaPelanggan
  // alamatLengkap
  // nomorTelepon
  // waktuSteam
  // jenisMobil
  // jenisSteam
  // pesan 
  // status

export default function Table(props){
    let i = 0;
    const [data,setData] = useState([])

    useEffect(()=>{
        setData(props.dataTable);
    },[props.dataTable])

    console.log("Table",data)
    return (
        <div className="body">
            <div className="mt-4" style={{width:"90%",margin:"auto"}}>
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
                </tr>
                </thead>
                <tbody>
                {
                   data.map((el)=>{
                       return <Row 
                            key={i++}
                            namaPelanggan={el.namaPelanggan}
                            alamatLengkap={el.alamatLengkap}
                            nomorTelepon={el.nomorTelepon}
                            waktuSteam={el.waktuSteam}
                            jenisMobil={el.jenisMobil}
                            jenisSteam={el.jenisSteam}
                            pesan ={el.pesan }
                            status={el.status} />
                   })
                }
                </tbody>
            </table>
            </div>
        </div>
    )
}