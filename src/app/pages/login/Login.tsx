import { useCallback,  useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin"
import { ButtonLogin } from "./components/ButtonLogin"


export const Login = () =>{
    const inputPassworRef = useRef<HTMLInputElement>(null)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = useCallback(() => {
        console.log(email)
        console.log(password) 
    },[email, password])

    return (
        <div>
            <form action="">
                
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

                <ButtonLogin type="button" onClick={handleLogin}>Entrar</ButtonLogin>
                <ButtonLogin type="button" onClick={handleLogin}>Cadastrar</ButtonLogin>

            </form>
        </div>
    );
}
