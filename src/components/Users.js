import React from 'react';

import {  useQuery } from '@apollo/client';

//Queries
import { GET_USERS } from '../graphQL/queries';


function Users() {

    const {loading , data , error}=useQuery(GET_USERS);
console.log({loading,data,error});
    if(loading) return <h1>Loading ...</h1>
    if(error) return <h2>Something went wrong</h2>

  return (
    <div>
      {
        data.users.data.map((user) => (
        <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>

        </div>
     )) }
    </div>
  )
}

export default Users;
