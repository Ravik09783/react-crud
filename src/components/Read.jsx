import React, { useEffect,useState } from 'react';
import axios from 'axios';
// import { navigate } from 'react-router-dom';

import { useHistory } from 'react-router-dom';


const Read = () => {

    const history = useHistory();

    const [data, setData]= useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/posts').then(res=>{
        console.log(res.data)
        setData(res.data)
      })  

    },[])

    const create = () =>{
        history.push('/create')
        window.location.reload()
    

    }

    const edit = (id) =>{
        history.push('/edit/'+id)
        window.location.reload()
    }

    const deletePost = (id) =>{
            axios.delete('http://localhost:3000/posts/'+id).then(res=>{
                console.log(res.data)
                window.location.reload()
            })
        }
    
  return (
    <div>
    <div className='my-5'>
        <button className='btn btn-success' onClick={create}>Create</button>

    </div>

    <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((data,index)=>{
                return(
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>
                            <button className="btn btn-primary" onClick={()=>edit(data.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={()=>deletePost(data.id)}>Delete</button>
                        </td>
                        {/* <td><button onClick={()=>window.location.href=`http://localhost:3000/posts/${data.id}`}>Edit</button></td> */}
                    </tr>
                )
            })}
        </tbody>
    </table>
    
    </div>
  )
}

export default Read