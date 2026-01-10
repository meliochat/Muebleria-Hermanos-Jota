import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,  // obligatorio
        trim: true  // elimina espacios vacios al inicio y al final
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number,
        default: 0
    },
    imagenURL: {
        type: String,
        default: "https://via.placeholder.com/150" //imagen por defecto
    }
}, {
    timestamps: true // crear automaticamente campos createdAt y updatedAt
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;