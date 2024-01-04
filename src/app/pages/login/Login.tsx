import { useNavigate } from 'react-router-dom'


export const Login = () =>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pagina-inicial')
    }

    return (

        <div>
            <button onClick={handleClick}>Pagina Inicial</button>
            <h3>Login</h3>
            <input type="text" name="Login" id="txtLogin" placeholder="exemplo@gmail.com" /> <br/><br/>
            <input type="text" name="Senha" id="txtSenha" placeholder="******"/><br/><br/>
            <button>Entrar</button>
        </div>
    );
}
