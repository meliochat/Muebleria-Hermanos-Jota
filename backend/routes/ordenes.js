import express from 'express';
import Orden from '../models/Orden.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { usuarioId, items, total } = req.body;
    try{
        const nuevaOrden = await Orden.create({
            usuario: usuarioId,
            items,
            total
        });
        res.status(201).json(nuevaOrden);
    } catch(error){
        console.log(error);
        res.status(500).json({ mensaje: 'Error al procesar la compra' });
    }
});

export default router;