import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin"


export const Login = () =>{
    const inputPassworRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(() => {
        return email.length * 1000000000
    }, [email.length])

    const handleLogin = useCallback(() => {
        console.log(email)
        console.log(password) 
    },[email, password])

    return (
        <div>
            <form action="">
                {/* <p>Qtdn caractere e-mail: {emailLength}</p> */}
                
                <InputLogin 
                    label="Email"
                    value={email} 
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPassworRef.current?.focus()}
                />

                <InputLogin 
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />


               {/*  <label>
                    <span>Email</span>
                    <input 
                    type="text" placeholder="exemplo@gmail.com" value={email} 
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? inputPassworRef.current?.focus() : undefined} />
                </label>

                <label>
                    <span>Senha</span>
                    <input ref={inputPassworRef}
                     type="password" value={password} 
                     onChange={e => setPassword(e.target.value)}/>
                </label>
 */}
                <button type="button" onClick={handleLogin}>Entrar</button>
            </form>
        </div>
    );
}
