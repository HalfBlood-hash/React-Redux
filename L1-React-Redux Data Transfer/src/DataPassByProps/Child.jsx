import React from 'react'
import Subchild from "./Subchild"
export default function Child(props) {
  return (
    <div>
        <p>Child - {props.childvalue}</p>
        <Subchild subvalue={props.childvalue} />
      
    </div>
  )
}
