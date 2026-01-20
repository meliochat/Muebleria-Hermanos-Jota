import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css'; 

const RegisterPage = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/registro', formData);
            login({ 
                nombre: res.data.nombre, 
                email: res.data.email, 
                esAdmin: res.data.esAdmin 
            }, res.data.token);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.mensaje || 'Error al registrarse. Intenta nuevamente.');
        }
    };

    return (
        <div className="auth-container container">
            <div className="auth-box">
                <h2 className="auth-title">Crear Cuenta</h2>
                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre Completo</label>
                        <input 
                        type="text" 
                        name="nombre" 
                        value={formData.nombre}
                        onChange={handleChange} 
                        required 
                        placeholder="Ej: Melina Jota"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
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
                        value={formData.password}
                        onChange={handleChange} 
                        required 
                        placeholder="Min. 6 caracteres"
                        />
                    </div>
                    
                    <button type="submit" className="btn-auth">Registrarme</button>
                </form>

                <p className="auth-footer">
                    ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión aquí</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;