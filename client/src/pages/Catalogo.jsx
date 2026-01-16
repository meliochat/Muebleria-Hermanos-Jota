import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.jsx';

const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const res = await axios.get('http://localhost:5000/api/productos');
                setProductos(res.data);
                setLoading(false);
            } catch(error){
                console.error('Error cargando productos:', error);
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if(loading){
        return <div className="container" style={{textAlign: 'center', marginTop: '50px'}}>Cargando catálogo...</div>
    }

    return (
        <div className="catalogo-container container" style={{ padding: '3rem 20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>Nuestra Colección</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
                {productos.map(((prod) => (
                    <ProductCard key={prod._id} producto={prod} />
                )))}
            </div>
        </div>
    );
};

export default Catalogo;