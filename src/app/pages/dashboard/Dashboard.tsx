import { Link } from 'react-router-dom'

export const Dashboard = () =>{
    return (
        <div>
            <h1>Pagina Inicial</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, 
                cupiditate quasi. Atque, repellendus quod sunt, officiis necessitatibus 
               aut id vero repellat aliquam ad quae ut, cum amet obcaecati optio suscipit?</p>

            <Link to="/login">Login</Link>
        </div>
    )
}