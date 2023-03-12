import React,{ useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphQL/mutations';


const UpdateUser = () => {
const[id , setId]=useState("");
const[name , setName]=useState("");
const [updateUser , {loading , data , error , called}]=useMutation(UPDATE_USER ,{
    variables :{
        id ,
        name
    }
})
console.log({loading , data , error , called});
  return (
    <div>
        <input type="text" value={id} placeholder="Enter ID" onChange={(e) =>setId(e.target.value)} />
       <input type="text" value={name} placeholder="Enter Name" onChange={(e) =>setName(e.target.value)} />
        <button onClick={()=> updateUser()}>Update User</button>
    </div>
  )
}

export default UpdateUser
