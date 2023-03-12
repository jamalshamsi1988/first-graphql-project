import React,{useState} from 'react';
import { useMutation } from '@apollo/client';

import { DELETE_USER } from '../graphQL/mutations';

const DeleteUser = () => {
    const[id , setId]=useState("");
    const[deleteUser ,{loading,data,error}]=useMutation(DELETE_USER ,{
        variables:{id}
    })

    console.log({loading,data,error});
  return (
    <div>
      <input type="text" value={id} placeholder="Enter Id" onChange={e => setId(e.target.value)} />
      <button onClick={()=> deleteUser()}>Delet User</button>
    </div>
  )
}

export default DeleteUser
