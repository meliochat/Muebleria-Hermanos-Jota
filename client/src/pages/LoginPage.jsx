import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post('https://muebleria-hermanos-jota-f52k.onrender.com/api/auth/login', formData);
            login({
                _id: res.data._id,
                nombre: res.data.nombre,
                email: res.data.email,
                esAdmin: res.data.esAdmin
            }, res.data.token);
            navigate('/');
        } catch (error){
            setError(error.response?.data?.mensaje || 'Credenciales incorrectas');
        }
    };

    return (
        <div className="auth-container container">
            <div className="auth-box">
                <h2 className="auth-title">Bienvenido/a de Nuevo</h2>
                {error && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                            placeholder="correo@ejemplo.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                            placeholder="************"
                        />
                    </div>
                    <button type="submit" className="btn-auth">Iniciar Sesión</button>
                </form>
                <p className="auth-footer">
                    ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;