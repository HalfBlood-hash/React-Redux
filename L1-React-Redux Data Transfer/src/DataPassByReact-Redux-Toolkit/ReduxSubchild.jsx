import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment ,incrementByAmount} from '../feature/showSlice.js'
export default function ReduxSubchild() {
    const data=useSelector((state)=>state.showslice.value)
    const dispatch=useDispatch()
  return (
    <div>
      <p>Redux Subchild- {data} </p>
      <button onClick={()=>dispatch(increment())}>Increment+</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5+</button>
    </div>
  )
}
