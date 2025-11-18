import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './component/Home.jsx';
import Createuser from './component/Createuser.jsx';
import Update from './component/Update.jsx';
import View from './component/View.jsx';
import Navbar from './component/Navbar.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='bg-secondary-subtle min-vh-100'>
  <h3>React + Redux Toolkit CRUD App</h3>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Createuser />} />
    <Route path='/view/:id' element={<View />} />
    <Route path="/update/:id" element={<Update />} />
  </Routes>
</div>
  </>
  )
}

export default App
