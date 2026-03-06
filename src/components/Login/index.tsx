import { Link } from "react-router-dom";
import "../Login/login.css"

export default function Login() {
    return (
        <>
        <div className="loginInputContainer">
            <p className='textTitle'>Entrar</p>
            <form action="GET">
                <p className='formLabel'>E-mail</p>
                <input type="text" className='inputArea' placeholder="Insira seu Email"/>
                <p className='formLabel'>Senha</p>
                <input type="text" className='inputArea' placeholder="Insira sua senha"/>
            </form>
                <button className='mainButton'>Entrar</button>
                <Link to={'/signin'} className='secondaryButton'>Cadastrar</Link>
        </div>
        </>
    )
}