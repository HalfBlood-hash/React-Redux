import React,{use, useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import{showUser,deleteUser} from '../feature/userDetailSlice.js';
export default function View() {
    const {id}=useParams();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {users,loading,error}=useSelector((state)=>state.userDetails||{users:[]});
    useEffect(()=>{
        dispatch(showUser());
    },[dispatch]);



    const handleDelete = async () => {
  try {
    await dispatch(deleteUser(user.id)).unwrap();
    navigate('/');
  } catch (err) {
    console.error('Delete failed:', err);
  }
}
    const user=users.find((usr)=>usr.id===id)
    if(loading){
        return <div>Loading...</div>
    }
    if(error)
    {
        return <di>errror : {error}</di>
    }
    if(!user){
        return(
            <div className="container mt-4">
                <div className="alert alert-warning">User not found.</div>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to All post</button>
            </div>
        )
    }
  return (
    <div>
      <div className="container mt-4 mx-auto text-center">
      <h2>User Details</h2>
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h5 className="card-title">Name: {user.name}</h5>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Age: {user.age}</p>
          <p className="card-text">Gender: {user.gender}</p>
          <p className="card-text text-muted">ID: {user.id}</p>
          <div>
            <button className="btn btn-secondary me-2" onClick={() => navigate('/')}>Back</button>
            <button className="btn btn-warning" onClick={() => navigate(`/update/${user.id}`)}>Edit</button>
            <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
