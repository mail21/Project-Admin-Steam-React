import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function Users({user}){
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
}

function App() {
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
    <div className="App">
        <Header />
        <Table dataTable={data}/>
    </div>
  );
}

export default App;
