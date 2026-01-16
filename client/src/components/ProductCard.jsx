import { Link } from 'react-router-dom';
import '../components/ProductCard.css';

const ProductCard = ({ producto }) => {
    return (
        <div className="product-card">
            <div className="card-image-container">
                <img 
                    src={producto.imagenURL}
                    alt={producto.nombre}
                    className="card-image"
                />
            </div>
            <div className="card-info">
                <h3 className="card-title">{producto.nombre}</h3>
                <p className="card-category">{producto.categoria}</p>
                <p className="card-price">{producto.precio.toLocaleString()}</p>
                <Link to={`/productos/${producto._id}`} className="card-button">Ver Detalles</Link>
            </div>
        </div>
    );
};

export default ProductCard;