import { Link } from 'react-router-dom'


export default function SignIn() {
    return(
        <div className="signinInputContainer">
            <p className='textTitle'>Criar conta</p>
            <form action="GET">
                <p className='formLabel'>Nome Completo</p>
                <input type="text" className='inputArea' placeholder="Insira seu nome completo"/>
                <p className='formLabel'>E-mail</p>
                <input type="text" className='inputArea' placeholder="Insira seu Email"/>
                <p className='formLabel'>Senha</p>
                <input type="text" className='inputArea' placeholder="Insira sua senha"/>
                <p className='formLabel'>Confirmar senha</p>
                <input type="text" className='inputArea' placeholder="Repita sua senha"/>
                <button className='mainButton'>Cadastrar</button>
            </form>
                <Link to={'/'} className='secondaryButton'>Ja tenho conta</Link>
        </div>  
    ) 
}