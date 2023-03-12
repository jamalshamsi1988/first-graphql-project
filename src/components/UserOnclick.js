import React ,{useState} from 'react';

import { useLazyQuery } from '@apollo/client';

//Queries

import { GET_USER } from '../graphQL/queries';



 function UserOnclick() {

    const [id , setId]=useState(2);
   
    const changeHamndler = e =>{
        setId(e.target.value);
    }

    const [getUser ,{loading , data , error ,called}]=useLazyQuery(GET_USER ,{
        variables :{id : id}
    });
    console.log({loading , data , error,called});
    
  return (
    <div>
      <input value ={id} onChange={changeHamndler} placeholder="type ID" />
      <button onClick={()=> getUser()}>Get User</button>
      {loading && <h1>Loading ...</h1>}
      {error && <h2>Error ...</h2>}
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

export default UserOnclick;