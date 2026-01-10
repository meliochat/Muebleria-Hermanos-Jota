import express from 'express';
import Producto from '../models/Producto.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const productos = await Producto.find(); // busca todos los productos en la base de datos
        res.json(productos);
    } catch(error){
        res.status(500).json({ mensaje: 'Error al obtener productos' });
    }
});

router.post('/', async (req, res) => {
    try{
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save(); // guarda el nuevo producto en la base de datos
        res.status(201).json(nuevoProducto);
    } catch(error){
        res.status(500).json({ mensaje: 'Error al crear producto', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al buscar el producto' });
    }
});

export default router;