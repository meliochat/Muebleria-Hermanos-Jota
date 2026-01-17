import { createContext, useState, useContext, useEffect } from 'react';

// 1. Creamos el contexto (la "nube" donde vivirán los datos)
const CartContext = createContext();
    export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
        const existingProduct = prevCart.find(item => item._id === product._id);

        if (existingProduct) {
            return prevCart.map(item =>
            item._id === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
        } else {
            return [...prevCart, { ...product, quantity }];
        }
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item._id !== id));
    };

    const clearCart = () => setCart([]);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

    return (
        <CartContext.Provider value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        totalItems, 
        totalPrice 
        }}>
        {children}
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);