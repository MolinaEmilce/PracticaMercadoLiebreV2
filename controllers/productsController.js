/*Traemos al archivo con el json parseado */
const productsDB = require('../data/productsDb');
module.exports = {
    detalles : (req,res)=>{
        let producto = productsDB.find(cadaProducto =>{
            //Retorna los productos que coincidan  con el id y categoria pasados por get
            return cadaProducto.id === Number(req.params.id) && cadaProducto.category === req.params.category; 
        });
        res.render('productDetalle',{
            titulo : "Detalle de producto",
            producto
        });
    }
}