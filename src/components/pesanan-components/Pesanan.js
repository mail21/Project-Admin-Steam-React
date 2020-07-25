import React, {useState,useEffect} from 'react';
import Table from './Table';

function Users({user}){
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
}

function Pesanan() {
  const [data,setData] = useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://localhost:8000/booking')
      response = await response.json()
      console.log(response)
      setData(response)
    }
    fetchMyAPI()
  }, [])
  
  return (
    <Table dataTable={data}/>
  );
}

export default Pesanan;
