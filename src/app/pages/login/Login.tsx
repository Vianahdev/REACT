import { useEffect, useMemo, useState } from "react"


export const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(() => {
        console.log("Executou")
        return email.length * 1000000000
    }, [email.length])

    const handleLogin = () => {
        console.log(email)
        console.log(password)
    }

    return (
        <div>
            <form action="">
                <p>Qtdn caractere e-mail: {emailLength}</p>

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
