const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TareaSchema = new Schema({
    titulo: String,
    descripcion: String,
    estado: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tarea',TareaSchema);
