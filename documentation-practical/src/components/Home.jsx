import {Login} from "./Login.jsx"
import * as React from "react"

export default function Home(){
    const user = "Lennox"
    const ID = "ABC2024"

    return (
        <Login user={user} ID={ID} />
    )
}