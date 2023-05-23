import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const history = useHistory();

  const  submitForm = event =>{
    event.preventDefault()
    console.log('submit', fname, lname)
    axios.post('http://localhost:3000/posts', {
     name: fname,
     email: lname
    }).then(response =>{
      console.log('response', response)
      history.push('/')
      window.location.reload()

    })
    
  }

  return (
    <div>
    <form onSubmit={submitForm}>

    <div>
    <label htmlFor='fname'>First Name</label>
      <input id='fname' type='text' value={fname} onChange={(e)=>setFname(e.target.value)}  />
    </div>

    <div>
    <label htmlFor='lname'>Email Address</label>
      <input id='fname' type='email' value={lname} onChange={(e)=>setLname(e.target.value)} />
    </div>

    <div>
      <input  type='submit' value='Submit' />
    </div>
      
    </form>
    </div>
  )
}

export default Create