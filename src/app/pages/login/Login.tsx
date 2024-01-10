import { useEffect, useState } from "react"


export const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(email)
        console.log(password)
    }, [email,password])

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
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleLogin}>Entrar</button>
            </form>
        </div>
    );
}
