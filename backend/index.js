import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import productosRoutes from './routes/productos.js';

dotenv.config(); //lee el archivo .env y carga las variables de entorno
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json()); //permite recibir JSON en el body de las peticiones
app.use(cors()); //permite que el frontend acceda al backend

// conexión a la base de datos (mongoDB)
if(process.env.MONGO_URI){
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log('Conectado exitosamente a MongoDB Atlas'))
        .catch((error) => console.error('Error de conexión a MongoDB Atlas:', error));
} else {
    console.error('MONGO_URI no está definido en las variables de entorno');
}

app.use('/api/productos', productosRoutes);

app.get('/', (req, res) => {
    res.send('API de Mueblería Hermanos Jota funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});