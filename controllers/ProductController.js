
// importar el modelo

const Product = require('../models/Products')

//crea las funciones necesarias para cada ruta

const createProduct = async (req, res) => {
    ModelProduct.create(req.body).then(product => {
        res.status(201).json(product)
    }).catch(error => {
        res.status(400).json({ error: error.message })
    }) 
}



module.exports = {
    createProduct,

}