const mongoose = require("mongoose");


const ProductoSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    imagen: {
        type: Image,
        required: [false]
    }
});

const Producto = mongoose.model("Producto", ProductoSchema);
module.exports = Producto;