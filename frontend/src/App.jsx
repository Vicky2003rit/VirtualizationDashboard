import { useState } from 'react'
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Dashboard3 from './components/Dashboard3';
import Dashboard4 from './components/Dashboard4';
import Dashboard5 from './components/Dashboard5';
import Dashboard6 from './components/Dashboard6';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar
    content={
      <Routes>
        <Route path="" element={<Dashboard1/>} />
        <Route path="/dashboard2" element={<Dashboard2/>} />
        <Route path="/dashboard3" element={<Dashboard3/>} />
        <Route path="/dashboard4" element={<Dashboard4/>} />
        <Route path="/dashboard5" element={<Dashboard5/>} />
        <Route path="/dashboard6" element={<Dashboard6/>} />
      </Routes>

    }
    />

      
    </>
  )
}

export default App
