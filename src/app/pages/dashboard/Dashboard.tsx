import { useRef } from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () =>{
    const countClick = useRef({counter : 0})

    return (
        <div>
            <h1>Dashboard</h1>

            <p>Contador: {countClick.current.counter}</p>

            <button onClick={() => countClick.current.counter++}>Somar</button>

            <br />

            <Link to="/login">Login</Link>
        </div>
    )
}