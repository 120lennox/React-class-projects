import * as React from 'react'

const name = "Lennox"
function App() {
    const welcome = {
        title: "Welcome",
        name: "User"
    }
 return (
  <div>
    <h1 className="flex text-3xl text-blue-900 text-center justify-center align-middle"> {welcome.title} {welcome.name} </h1>
    <label htmlFor="input">Name:</label>
    <input className="border border-blue-600 focus: ring-cyan-800 ring-2 border-r-2 outline-0" type="text" id="input" />
  </div>
 )
}

export default App
