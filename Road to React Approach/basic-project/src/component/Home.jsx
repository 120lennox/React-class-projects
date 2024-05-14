export default function Home(){
    const name = "Lennox"
    return (
        <div className="flex justify-center">
            <h1>Home</h1>
            <p className="text-2xl text-cyan-500" >I am {name}</p>
        </div>
    )
}