import React from 'react';
import { gql,useMutation } from '@apollo/client';

const CREATE_USER=gql`
                mutation{
                createUser(input : {
                    name :"Jamal"
                    username :"j.sh"
                    email:"jamal.shamsi1988@gmail.com"
                    phone :"09144880170"
                    
                })
                {
                    id 
                    name
                    username
                    email
                    phone
                }
                
                }
`;


const CreateUser = () => {
const [createUser ,{loading,data,error,called}]=useMutation(CREATE_USER);
console.log({loading,data,error,called});


  return (
    <div>
      <button onClick={()=> createUser()}>Create User</button>
    </div>
  )
}

export default CreateUser
