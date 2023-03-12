import React ,{useState} from 'react';

import { useQuery } from '@apollo/client';

//Queries

import { GET_USER } from '../graphQL/queries';



 function User() {

    const [id , setId]=useState(2);
   
    const changeHamndler = e =>{
        setId(e.target.value);
    }

    const {loadin , data , error}=useQuery(GET_USER ,{
        variables :{id : id}
    });
    console.log({loadin , data , error});
    
  return (
    <div>
      <input value ={id} onChange={changeHamndler} placeholder="type ID" />
      {
        data && (
          <>
             <h1>{data.user.name}</h1>
             <p>{data.user.email}</p>
             <p>{data.user.phone}</p>
          
          </>
        )
      }
    </div>
  )
}

export default User;