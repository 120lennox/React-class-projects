import * as React from "react"

function App() {
  const user = "Lennox Mountain"
  const home = {
    names: "Lennox Mountain",
    fav_food: "Nsima ya mbewa",
    age: 2024 - 2003,
    marital_status: "single",
    theme: {
      display: 'flex',
      justifyContent: 'center',
      alignItemns: 'center',
      backgroundColor: 'grey',
    }
  }
  
  return (
    <div style={home.theme}>
      <h1> {user}'s profile </h1>
      <ul>
        <li>Favorite food: {home.fav_food} </li>
        <li>Age: {home.age} </li>
        <li>Marital status: {home.marital_status} </li>
      </ul>
    </div>
  );
}

export default App
