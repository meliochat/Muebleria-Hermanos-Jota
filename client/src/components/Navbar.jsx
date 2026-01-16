import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo-container">
                    <img src="./public/img/logo.svg" alt="Logo Hermanos Jota" className="navbar-logo-img" />
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
                        <Link to="/login" className="nav-link btn-login">Inicio Sesión</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;