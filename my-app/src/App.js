/* eslint-disable no-unused-vars */
import './App.css';
import UserForm from './components/UserForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import CurrentInfoUser from './components/CurrentInfo.jsx'
import Schedule from './components/Schedule.jsx'
import React from 'react';
import axios from 'axios'

const { useState, useEffect } = React;

const InitialValues = {
  name: '',
  age: '',
  gender: '',
  weight: '',
  height: '',
  activityLevel: ''
}

function App() {
  const [currentUser, setCurrentUser] = useState()

  const getUser = (obj) => {
    console.log(obj, 'getUser')
    axios.get('/api', {
      params: obj
    })
      .then((res) => {
        setCurrentUser(res.data[0])
        console.log('GOT IT', res.data[0])
      })
      .catch(err => console.log(err, 'ERROR in get request - app.js'))
  }
  const postUser = (obj) => {
    axios.post('/api', obj)
      .then((res) => {
        console.log(res)
        setCurrentUser(res.data)
      })
     .catch(err => console.log(err, 'ERROR in post request - app.js'))
  }

  return (
    <div>
      <div className="App">
        <h1>
          Countdown!
        </h1>
        <div className='top-container'>
          <UserForm postUser={postUser} />
          <SearchBar getUser={getUser}/>
          {currentUser ? <CurrentInfoUser currentUser={currentUser}/> : <p> No user information </p>}
        </div>
      </div>
      {currentUser ? <Schedule currentUser={currentUser} className='schedule'/> : null}
    </div>
  );
}

export default App;
