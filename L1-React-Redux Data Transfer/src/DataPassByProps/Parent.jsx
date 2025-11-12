import React from 'react'
import Child from './Child'
import { useState } from 'react'
export default function Parent() {
  const [value,setValue]=useState(1);
  return (
    
    <div>
      <p>Parent -{value}</p>
      <Child   childvalue={value} />
    </div>
  )
}
