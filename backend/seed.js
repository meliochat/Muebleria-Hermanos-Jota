import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Producto from './models/Producto.js';
import productos from './data/productos.js';

dotenv.config();

const importarDatos = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a la base de datos');

        await Producto.deleteMany(); //elimina todos los productos existentes
        console.log('Productos anteriores eliminados');

        await Producto.insertMany(productos); //inserta los productos del array
        console.log('Productos importados exitosamente');

        process.exit(); //termina el proceso
    } catch(error){
        console.error('Error: ${error.message}');
        process.exit(1); //termina el proceso con error
    }
};

importarDatos();