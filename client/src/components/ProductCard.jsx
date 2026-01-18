import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../components/ProductCard.css';

const ProductCard = ({ producto }) => {
    const {  addToCart } = useCart();
    const handlerAddToCart = (e) => {
        e.preventDefault(); //evita que el link lleve a otra pagina
        addToCart(producto);
    }
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
                <button onClick={handlerAddToCart} className="card-button btn-primary">Añadir</button>
            </div>
        </div>
    );
};

export default ProductCard;