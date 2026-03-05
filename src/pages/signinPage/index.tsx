import { Link } from 'react-router-dom'
import './signinPage.css'

export default function SignIn() {
    return (
    <div className="loginContainer">
        <div className="logoContainer">
            <h1>Fatec SetQ</h1>
        </div>

        <div className="inputContainer">
            <p className='textTitle'>Criar conta</p>
            <form action="GET">
                <p className='formLabel'>Nome Completo</p>
                <input type="text" className='inputArea' placeholder="Insira seu nome completo"/>
                <p className='formLabel'>Email</p>
                <input type="text" className='inputArea' placeholder="Insira seu Email"/>
                <p className='formLabel'>Senha</p>
                <input type="text" className='inputArea' placeholder="Insira sua senha"/>
                <p className='formLabel'>Confirmar senha</p>
                <input type="text" className='inputArea' placeholder="Repita sua senha"/>
                <button className='loginButton'>Cadastrar</button>
            </form>
                <Link to={'/'} className='signinButton'>Ja tenho conta</Link>
        </div>
    </div>
    )
}