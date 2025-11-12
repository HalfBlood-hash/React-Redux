import { useState } from 'react'
import Parent from './DataPassByProps/Parent'
import './App.css'
import ReduxParent from './DataPassByReact-Redux-Toolkit/ReduxParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>React Props</h3>
     <Parent />
     <h3>React React Toolkit </h3>
     <ReduxParent />
    </>
  )
}

export default App
