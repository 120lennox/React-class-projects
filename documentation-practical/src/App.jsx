import * as React from "react"
import InputBox from "./components/InputBox"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Signup from "./components/Signup"
import Login from "./components/Login"

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
