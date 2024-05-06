import React from 'react'
//commented react import is just the same as the import up here. just different styles hooo😂😂😂
// import * as React from 'react'

function App() {
  const name = "Lennox"
  const age = 2024 - 2003
  return (
    <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold">Profile</h1>
        <br/>
        <p className="text-2xl text-cyan-800">
          Name: {name}
          <br/>
          Age: {age} years old
        </p>
    </div>
  );
}
 
export default App;
