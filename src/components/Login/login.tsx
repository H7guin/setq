import { Link } from "react-router-dom";
import "../Login/login.css"

export default function Login() {
    return (
        <>
        <div className="inputContainer">
            <p className='textTitle'>Entrar</p>
            <form action="GET">
                <p className='formLabel'>E-mail</p>
                <input type="text" className='inputArea' placeholder="Insira seu Email"/>
                <p className='formLabel'>Senha</p>
                <input type="text" className='inputArea' placeholder="Insira sua senha"/>
                <button className='loginButton'>Entrar</button>
                <Link to={'/signin'} className='signinButton'>Cadastrar</Link>
            </form>
        </div>
        </>
    )
}