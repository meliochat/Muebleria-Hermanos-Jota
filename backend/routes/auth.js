import express from 'express';
import Usuario from '../models/Usuario.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const generarToken = (id) => {
    return jwt.sign({ id }, 'PALABRA_SECRETA_SUPER_SEGURA', {
        expiresIn: '30d',
    });
};

router.post('/registro', async (req, res) => {
    const { nombre, email, password } = req.body;
    try{
        const existeUsuario = await Usuario.findOne({ email });
        if(existeUsuario){
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }
        const usuario = await Usuario.create({ nombre, email, password });
        res.status(201).json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarToken(usuario._id),
        });
    } catch(error){
        res.status(500).json({ mensaje: 'Error en el registro' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const usuario = await Usuario.findOne({ email });
        if(usuario && (await usuario.comprobarPassword(password))){
            res.json({
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                token: generarToken(usuario._id),
            });
        } else {
            res.status(401).json({ mensaje: 'Datos incorrectos' });
        }
    } catch(error){
        res.status(500).json({ mensaje: 'Error en el login' });
    }
});

export default router;