import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import logoImg from '../assets/logo.svg';
import '../components/Navbar.css';

const Navbar = () => {
    const { totalItems } = useCart();
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo-container">
                    <img src={logoImg} alt="Logo Hermanos Jota" className="navbar-logo-img" />
                </Link>

                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/productos" className="nav-link">Catálogo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className="nav-link">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/carrito" className="nav-cart">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            <span className="cart-badge">{totalItems}</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        {user ? (
                            <div className="user-menu">
                                <span className="user-name">Hola, {user.nombre}</span>
                                <button onClick={logout} className="btn-logout">Salir</button>
                            </div>
                        ) : (
                            <Link to="/login" className="nav-link btn-login">Inicio Sesión</Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;