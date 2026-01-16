import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducto = async () => {
            try{
                const res = await axios.get(`http://localhost:5000/api/productos/${id}`);
                setProducto(res.data);
                setLoading(false);
            } catch(error){
                console.error('Error buscando el producto:', error);
                setLoading(false);
            }
        };
        fetchProducto();
    }, [id]);

    if(loading) return <div className="text-center">Cargando mueble...</div>;
    if(!producto) return <div className="text-center">Producto no encontrado</div>;

    return (
        <div className="detail-container container">
            <Link to="/productos" className="back-link">🢘 Volver al Catálogo</Link>

            <div className="detail-content">
                <div className="detail-info">
                    <h1 className="detail-title">{producto.nombre}</h1>
                    <div className="detail-divider"></div>
                    <p className="detail-description">{producto.descripcion}</p>
                    <div className="detail-specs">
                        <div className="spec-row">
                            <span className="spec-label">Stock</span>
                            <span className="spec-value">{producto.stock} unidades</span>
                        </div>
                    </div>
                    <div className="detail-price-box">
                        <span className="detail-price">$ {producto.precio.toLocaleString()}</span>
                        <button className="btn-add-cart">Añadir al Carrito</button>
                    </div>
                </div>
                <div className="detail-image-box">
                    <img 
                        src={producto.imagenURL}
                        alt={producto.nombre}
                        className="detail-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;