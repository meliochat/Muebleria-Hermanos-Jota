import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
    const { cart, removeFromCart, addToCart, clearCart, totalPrice } = useCart();
    if (cart.length === 0) {
        return (
        <div className="empty-cart-container container">
            <h2>Tu carrito está vacío</h2>
            <p>Parece que aún no has descubierto nuestras piezas de diseño.</p>
            <Link to="/productos" className="btn-back-catalog">Ir al Catálogo</Link>
        </div>
        );
    }

    return (
        <div className="cart-page container">
        <h1 className="cart-title">Tu Carrito</h1>

        <div className="cart-grid">
            <div className="cart-items">
            {cart.map((item) => (
                <div key={item._id} className="cart-item">
                
                <div className="item-image">
                    <img src={item.imagenURL} alt={item.nombre} />
                </div>

                <div className="item-details">
                    <h3>{item.nombre}</h3>
                    <p className="item-price">$ {item.precio.toLocaleString()}</p>
                    
                    <div className="item-controls">
                    <button 
                        className="qty-btn"
                        onClick={() => {
                        if (item.quantity > 1) {
                            addToCart(item, -1); // Resta 1
                        } else {
                            removeFromCart(item._id); // Si es 1 y resta, lo borra
                        }
                        }}
                    >
                        -
                    </button>

                    <span className="item-qty">{item.quantity}</span>

                    <button 
                        className="qty-btn"
                        onClick={() => addToCart(item, 1)} // Suma 1
                    >
                        +
                    </button>
                    </div>
                </div>

                <button 
                    className="btn-remove"
                    onClick={() => removeFromCart(item._id)}
                >
                    Eliminar
                </button>
                </div>
            ))}
            
            <button className="btn-clear" onClick={clearCart}>Vaciar Carrito</button>
            </div>

            <div className="cart-summary">
            <h2>Resumen</h2>
            <div className="summary-row">
                <span>Subtotal</span>
                <span>$ {totalPrice.toLocaleString()}</span>
            </div>
            <div className="summary-row">
                <span>Envío</span>
                <span>Gratis</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-total">
                <span>Total</span>
                <span>$ {totalPrice.toLocaleString()}</span>
            </div>

            <Link to="/login" className="btn-checkout">
                Finalizar Compra
            </Link>
            </div>
        </div>
        </div>
    );
};

export default CartPage;