React Readux toolkit


# React + Vite

This is react redux 1st project 

Why we are using the react redux toikit

let suppose :-
take heirchey 
App -> child1-> subchild1
App-> child2 -> subchild2


if there is one value in app component want to send that data to subchild1 then there 1st value is passed by
app to child1 throud prop

function App(){
    const [val, setValue]=useState(1);
    return (
        <>
        <child value={val}/>
        </>
    )
}
now value =1 is passed on the child1

now from child1 have to pass the value to subchild1

function child1(props)
{
    return(
        <>
        <subchild subval={prop.value}>
        </>

    )
}

now this subval is now pass to the subchild1 using props

function subchild1(props)
{
    return (
        <>
        {props.subval}
        </>
    )
}
now the value is display in this way by using props which is ineffcient because we have to unesccary pass the value to child1. This process is called prop drilling

There is running explame to the passing value through props in prop folder and uncommect the parent in app.
you can the how the value is passed from parent to subchild1 throug child1 we cannot send the data from parent to grand child only direct desendent have acces of parent value 


we can take running by uncommeting the parent component in the app.jsx

here the backgound why need the redux toolkit 
 Redux has step by step process to impplement which most same for the most of the time 
 most of the step you might using every way so 

step 1
    install redux npm install --save react-redux @reduxjs/toolkit

step 2
    Create a global store
    create src/app/store.js
    import { configureStore } from "@reduxjs/toolkit";

    export const store = configureStore({
    reducer: {},
    });
step 3 
    make the store available to everyone by insert the store at root level i.e index.js/main.js where the app.jsx is added
     import store from store.js
     import provider from react-redux
step 4
    create slice in feature/showslice
    IN slice we write the logic of the store reducer(how reducer is behave )

    slice have 3 thing 
    name
    initialstate
    reducers
        inside reducer we have action and state 
        
useSelector is used to display the value of slice 
useDispatch use to change the value in store

import React from 'react'
import ReduxChild from './ReduxChild'
import { useSelector,useDispatch } from 'react-redux'
import { decrement } from '../feature/showSlice'

export default function ReduxParent() {
    const data=useSelector((state)=>state.showslice.value)
    const dispatch=useDispatch();
  return (
    <div>
      <p>Redux parent- {data} </p>
      <button onClick={()=>dispatch(decrement())}>Decrement-</button>
      <ReduxChild />
    </div>
  )
}