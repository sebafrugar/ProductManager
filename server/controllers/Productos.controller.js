const Producto = require("../models/productos.models");


module.exports.findAllProductos = (req, res) => {
    Producto.find()
        .then(allProducts => res.json({ productos : allProducts }))
        .catch((err) => res.json({ message : "Algo salio mal", error:err}))
}

module.exports.createProducto = (req,res)=>{
    Producto.create(req.body)
        .then((nuevoProducto)=>res.json({producto :nuevoProducto}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOneProducto = (req,res)=>{
    Producto.findOne({_id: req.params.id})
        .then((producto)=>res.json({producto:producto}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.updateProducto = (req,res)=>{
    Producto.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((producto)=>res.json({producto:producto}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.deletePoducto = (req,res)=>{
    Producto.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}