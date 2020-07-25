import React , {useState, useEffect} from 'react';
import Header from './Header';
import Pesanan from './pesanan-components/Pesanan';
import Profile from './profile-components/Profile';
import Booking from './booking-components/Booking';
import FormEditProfile from './profile-components/FormEditProfile';
import {useHistory, Route} from 'react-router-dom';

function Hai({nama}){
  return <h1 className="mt-5" style={{textAlign:"center"}}>Selamat Datang {nama}</h1>
}

function UsersPage() {
  const history = useHistory();
  const [user,setUser] = useState({})

  useEffect(()=>{
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let username = localStorage.getItem('username');
    if(isLoggedIn != "true"){
      history.push('/')
    }
    async function fetchUser(){
      let getUser = await fetch('http://localhost:8000/users')
      let dataFromFetch = await getUser.json()
      console.log(dataFromFetch);
      dataFromFetch.map(el => {
        if(el.username == username){
          setUser(el)
        }
      })
      

    }
    fetchUser();
  },[])


  return (
    <div className="UsersPage">
            <Header />
            <Route path="/user" exact >
              <Hai nama={user.fullName} />
            </Route>
            <Route path="/user/pesanan" component={Pesanan}/>
            <Route path="/user/profile">
              <Profile user={user} />
            </Route>
              <Route path="/user/edit-profile">
                <FormEditProfile />
              </Route>
            <Route path="/user/booking" component={Booking}/>
    </div>
  );
}

export default UsersPage;
