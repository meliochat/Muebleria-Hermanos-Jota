import mongoose from 'mongoose';

const ordenSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    items: [
        {
        producto: { type: Object, required: true },
        cantidad: { type: Number, required: true, default: 1 }
        }
    ],
    total: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        default: 'Pendiente' 
    }
    }, {
    timestamps: true 
});

const Orden = mongoose.model('Orden', ordenSchema);
export default Orden;