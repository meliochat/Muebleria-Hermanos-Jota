import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Catalogo from './pages/Catalogo.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import CartPage from './pages/CartPage.jsx';
import './App.css';

function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Catalogo />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/contacto" element={<h2>Contacto</h2>} />
        <Route path="/login" element={<h2>Inicio Sesión</h2>} />
      </Routes>
    </>
  );
};

export default App;