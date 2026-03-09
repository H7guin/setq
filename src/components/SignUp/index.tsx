import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios, {AxiosError} from 'axios';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export default function SignUp({setUser}: {setUser: (user: User) => void}) {
        const [form, setForm] = useState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        const [error, setError] = useState("")
            const navigate = useNavigate();

        const handleSubmit = async (e: React.SyntheticEvent) => {
            e.preventDefault();

            if (form.password !== form.confirmPassword) {
                setError("As senhas não coincidem");
                return;
            }

            try {
                const res = await axios.post(
                    "http://localhost:3000/api/auth/register",
                    form
                );
                setUser(res.data.user); 
                navigate("/");
            } catch (err) {
                if (err instanceof AxiosError) {
                    setError(err.response?.data?.message);
                } else {
                    setError("Erro inesperado");
                }
            }
        };


    return (
        <div className="signinInputContainer">
            <p className='textTitle'>Criar conta</p>
            <h2>{error}</h2>
            <form onSubmit={handleSubmit}>
                <p className='formLabel'>Nome Completo</p>
                <input type="text" className='inputArea' placeholder="Insira seu nome completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})} required/>
                <p className='formLabel'>E-mail</p>
                <input type="text" className='inputArea' placeholder="Insira seu Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value})} required/>
                <p className='formLabel'>Senha</p>
                <input type="password" className='inputArea' placeholder="Insira sua senha" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value})} required/>
                <p className='formLabel'>Confirmar senha</p>
                <input type="password" className='inputArea' placeholder="Repita sua senha" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value})} required/>
                <button className='mainButton'>Cadastrar</button>
            </form>
                <Link to={'/'} className='secondaryButton'>Ja tenho conta</Link>
        </div>  
    ) 
}