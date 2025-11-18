import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../feature/userDetailSlice.js';
export default function Navbar() {
  const allUsers = useSelector((state) => state.userDetails.users);
  const [searchData,setSearchData]=React.useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(searchUser(searchData));
  },[searchData,dispatch]);
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">All Users({allUsers.length})</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/create">Create User</Link>
        </li>
        
       
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search"
        onChange={(e)=>setSearchData(e.target.value)} placeholder="Search" aria-label="Search"/>
      
      </form>
    </div>
  </div>
</nav>
   </>
  )
}
