import { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import './App.css'
import {getAllData}  from './feature/gitHubUsers';
function App() {
  const dispatch = useDispatch();
  const {users,loading,error} =useSelector((state)=>{
    // console.log("state",state.gitHubUsers.users);
    return state.gitHubUsers;
  })
  if(loading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>Error: {error}</h2>
  }
  return (
    <>
    <h3>Data Fetch By RRt</h3>
    <button onClick={()=>dispatch(getAllData())}>Get GitHub users</button>
    {
      users.map((item)=>{
        return (
          <li key={item.id}>{item.login}</li>
        )
      })
    }
       
    </>
  )
}

export default App
