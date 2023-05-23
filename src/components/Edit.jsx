import React, { useEffect, useState } from 'react'
import {  useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Edit = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const history = useHistory()
  const { id } = useParams()
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    axios.get(`http://localhost:3000/posts/${id}`).then(res=>{
      console.log(res.data)
      setFname(res.data.name)
      setLname(res.data.email)
    })

  }, [])

  const submitForm = (e) => {
    e.preventDefault()
    console.log("your edit form data is", fname, lname)
    axios.put(`http://localhost:3000/posts/${id}`, {
          name: fname,
          email: lname
        }).then(res=>{
          console.log("Edit success full.")
        })

    history.push('/');
    window.location.reload()

  }
  return (
    <div>

      <div>
        <form onSubmit={submitForm}>

          <div>
            <label htmlFor='fname'>First Name</label>
            <input id='fname' type='text' value={fname} onChange={(e) => setFname(e.target.value)} />
          </div>

          <div>
            <label htmlFor='lname'>Email Address</label>
            <input id='fname' type='email' value={lname} onChange={(e) => setLname(e.target.value)} />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>

        </form>
      </div>


    </div>
  )
}

export default Edit