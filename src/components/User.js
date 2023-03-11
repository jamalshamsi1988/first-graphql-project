import React ,{useState} from 'react';

import { gql, useQuery } from '@apollo/client';

const GET_USER = gql `

        query getUser($id :ID!){
            data (id:$id){
                user{
                    id
                    name 
                    email
                    phone
                }

            }

        }

`;





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
    </div>
  )
}

export default User;