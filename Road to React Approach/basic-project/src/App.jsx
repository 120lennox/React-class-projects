import * as React from 'react'
import {Route, Routes} from "react-router-dom"
import Signup from './component/Signup'
import Home from './component/Home'
import Login from './component/Login'

const name = "Lennox"
function App() {
 return (
  <div>
    
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
 </Routes>
  </div>

 )
}

export default App
