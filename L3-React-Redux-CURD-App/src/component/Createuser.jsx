

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import  {createUser}  from '../feature/userDetailSlice.js';
export default function CreateUser() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [data,setData]=useState({});
    const handleChnage=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        // console.log(data);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("user...",data);
        dispatch(createUser(data));
        navigate('/');
    }
    return (
        <div>
            <h1>Create User </h1>
            <form className='w-50 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3' onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control"   name='name'  onChange={handleChnage}/>
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' onChange={handleChnage}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                    <input type="number" className="form-control" name='age' onChange={handleChnage}/>
                </div>
                
                <div className='d-flex mb-3'>
                    <label className="form-label me-3">Gender</label>
                    <div className="form-check me-3">
                        <input className="form-check-input" type="radio" name="gender" id="radioDefault1" value="male" onChange={handleChnage}/>
                        <label className="form-check-label" htmlFor="radioDefault1">
                            male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="radioDefault2" value="female" onChange={handleChnage}/>
                        <label className="form-check-label" htmlFor="radioDefault2">
                            female
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
