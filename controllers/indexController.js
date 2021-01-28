const productsDbParseada = require('../data/productsDb');

module.exports = {
    index: (req,res)=>{
        let ofertas = productsDbParseada.filter(cadaProducto =>{
            return cadaProducto.category == "in-sale";
        });
        let visitas = productsDbParseada.filter(cadaProducto =>{
            return cadaProducto.category == "visited";
        });
        res.render('index',{
            titulo : 'Home-Page',
            productosEnOfertas : ofertas,
            productosEnVisitas : visitas 
        });
    }
}