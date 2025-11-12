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
