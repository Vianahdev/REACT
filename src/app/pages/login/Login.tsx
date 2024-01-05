/* import { useNavigate } from 'react-router-dom' */

import { useState } from "react"


export const Login = () =>{
   /*  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pagina-inicial')
    } */

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input type="text" placeholder="exemplo@gmail.com" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label htmlFor="">
                    <span>Senha</span>
                    <input type="password" value={password} onChange={s => setPassword(s.target.value)}/>
                </label>

                <button type="button" onClick={handleLogin}>Entrar</button>
            </form>
        </div>
    );
}
