

import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { showUser ,deleteUser} from '../feature/userDetailSlice.js';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const {users,loading ,error,searchUser} = useSelector((state) => state.userDetails||{users:[] });
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [genderFilter,setGenderFilter]=React.useState("all");
    useEffect(() => {
       dispatch(showUser());
    }, [dispatch]);

    const handleDelete=(id)=>async()=>{
        try{
            await dispatch(deleteUser(id)).unwrap();
        }
        catch(err){
            console.error('Delete failed:',err);
        }   
    }
    if(loading){
        return <div>Loading...</div>
    }
    if(error){  
        return <div>Error : {error}</div>
    }
  return (
    <div>
      <div className='container mt-4'>
        <h2>User Details</h2>

        <div className='d-flex mb-3'>
                    <label className="form-label me-3">Filter User by Gender</label>
                    <div className="form-check me-3">
                        <input className="form-check-input" type="radio" name="gender" id="radioDefault1" value="all"  checked={genderFilter==="all"} onChange={(e)=>setGenderFilter(e.target.value)} />
                        <label className="form-check-label" htmlFor="radioDefault1">
                            All 
                        </label>
                    </div>
                    <div className="form-check me-3">
                        <input className="form-check-input" type="radio" name="gender" id="radioDefault1" value="male"  checked={genderFilter==="male"} onChange={(e)=>setGenderFilter(e.target.value)} />
                        <label className="form-check-label" htmlFor="radioDefault1">
                            male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="radioDefault2" value="female" checked={genderFilter==="female"} onChange={(e)=>setGenderFilter(e.target.value)}  />
                        <label className="form-check-label" htmlFor="radioDefault2">
                            female
                        </label>
                    </div>
                </div>

        {
            (!users || users.length ===0)?<div className='alert alert-secondary'>No User Found</div>:null
        }
        {/* short cut to write above line in jsx */}
      {/* {(!user || user.length === 0) && (
        <div className="alert alert-secondary">No users found.</div>
      )} */}
      <div className='row g-3' >
        {
            users && users.filter((user)=>{
                if(searchUser===""){
                    return user;
                }
                else
                {
                    return user.name.toLowerCase().includes(searchUser.toLowerCase());
                }
            })
            .filter((user)=>{
                if(genderFilter==="male"){
                    return user.gender==="male";
                }
                else if(genderFilter==="female"){
                    return user.gender==="female";
                }   
                else {
                    return user
                }
            })
            .map((user)=>{
                return (
                    <div className='col-md-4' key={user.id}>
                        <div className="card"  style={{cursor:'pointer'}}>
                            <div className="card-body">
                                <h5 className="card-title">Name: {user.name}</h5>
                                {/* <p className="card-text">Email: {user.email}</p> */}
                                {/* <p className="card-text">Age: {user.age}</p> */}
                                <p className="card-text">Gender: {user.gender}</p>
                                <div>
                                <button className='btn btn-primary me-2' onClick={()=>navigate(`/view/${user.id}`)}>View</button>
                                <button className='btn btn-secondary' onClick={()=>navigate(`/update/${user.id}`)}>Edit</button>
                                <button className='btn btn-danger ms-2' onClick={handleDelete(user.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                )
            })
        }
      </div>

      </div>
    </div>
  )
}
                                        