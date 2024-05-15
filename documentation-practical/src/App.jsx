import * as React from "react"
import InputBox from "./components/InputBox"

function App() {
  return(
    <div>
      <InputBox type="text" placeholder="enter email"/> <br />
      <InputBox type="password" placeholder="enter password" />
      <InputBox type="submit" value="Submit" />
    </div>
    
  )
}

export default App
