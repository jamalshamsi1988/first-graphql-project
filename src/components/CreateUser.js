import React,{useState} from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphQL/mutations';



const CreateUser = () => {

    const[name , setName]=useState("");
    const[username , setUsername]=useState("");
    const[email , setEmail]=useState("");
    const[phone , setPhone]=useState("");
const [createUser ,{loading,data,error,called}]=useMutation(CREATE_USER,{
    variables :{
        name,
        username,
        email,
        phone
    }
});
console.log({loading,data,error,called});


  return (
    <div>
        <input type="text" value={name} placeholder="Enter Name" onChange={(e) =>setName(e.target.value)} />
        <input type="text" value={username} placeholder="Enter username" onChange={(e) =>setUsername(e.target.value)} />
        <input type="text" value={email} placeholder="Enter email" onChange={(e) =>setEmail(e.target.value)} />
        <input type="text" value={phone} placeholder="Enter phone" onChange={(e) =>setPhone(e.target.value)} />

      <button onClick={()=> createUser()}>Create User</button>
    </div>
  )
}

export default CreateUser
