import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
    const [productosDestacados, setProductosDestacados] = useState([]);
    const scrollRef = useRef(null);
    useEffect(() => {
        const fetchDestacados = async () => {
            try{
                const res = await axios.get('http://localhost:5000/api/productos');
                setProductosDestacados(res.data.slice(0, 4));
            } catch(error){
                console.error("Error cargando destacados", error);
            }
        };
        fetchDestacados();
    }, []);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if(current){
            if (direction === 'left') {
                current.scrollBy({ left: -320, behavior: 'smooth' }); // Mueve 320px a la izq
            } else {
                current.scrollBy({ left: 320, behavior: 'smooth' }); // Mueve 320px a la der
            }
        }
    }

    return (
        <div className="home-page">
            <section className="hero-section">
                <div className="hero-content container">
                <h1 className="hero-title">Minimalismo Cálido <br /> para tu Hogar</h1>
                <p className="hero-subtitle">
                    Diseño y funcionalidad en armonía. Descubre nuestra colección de muebles 
                    inspirados en la naturaleza y la sustentabilidad.
                </p>
                <Link to="/productos" className="btn-hero">
                    Ver Colección Completa
                </Link>
                </div>
            </section>

            <section className="featured-section container">
                <div className="section-header-row">
                    <h2 className="section-title">Tendencias de la Semana</h2>
                    <Link to="/productos" className="link-view-all">Ver todo el catálogo →</Link>
                </div>
                <div className="carousel-wrapper">
                    <button className="carousel-btn btn-left" onClick={() => scroll('left')}>
                        &#8249; 
                    </button>
                    <div className="carousel-track" ref={scrollRef}>
                        {productosDestacados.map((producto) => (
                        <div key={producto._id} className="carousel-card-wrapper">
                            <ProductCard producto={producto} />
                        </div>
                        ))}
                    </div>
                    <button className="carousel-btn btn-right" onClick={() => scroll('right')}>
                        &#8250;
                    </button>
                </div>
            </section>

            <section className="benefits-section">
                <div className="container benefits-grid">
                <div className="benefit-item">
                    <h3>Diseño Sostenible</h3>
                    <p>Materiales certificados y procesos eco-amigables.</p>
                </div>
                <div className="benefit-item">
                    <h3>Garantía de Calidad</h3>
                    <p>Muebles pensados para durar toda la vida.</p>
                </div>
                <div className="benefit-item">
                    <h3>Envíos a todo el País</h3>
                    <p>Llevamos el diseño hasta la puerta de tu casa.</p>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Home;