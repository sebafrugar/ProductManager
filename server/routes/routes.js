const ProductosController = require("../controllers/Productos.controller")

module.exports = app => {

    app.get("/api/productos",ProductosController.findAllProductos);
    app.get("/api/producto/:id", ProductosController.findOneProducto);
    app.post("/api/productos/new",ProductosController.createProducto);
    app.put("/api/productos/update/:id",ProductosController.updateProducto);
    app.delete("/api/productos/delete/:id",ProductosController.deletePoducto);
    
}