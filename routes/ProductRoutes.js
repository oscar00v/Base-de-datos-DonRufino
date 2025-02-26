
// importar express 
const express = require('express')

// mando a llamar router de express

const router = express.Router()

//importar el controlador

const ProductController = require('../controllers/ProductController')

//definir rutas de la aplicación

router.post('/products', ProductController.create)
router.get('/products', ProductController.findAllProducts)// 
router.get('/products/:id', ProductController.findOneProduct)
router.patch('/products/:id', ProductController.updateOneProduct)
router.delete('/products/:id', ProductController.softDeleteOneProduct)
router.delete('/products/force/:id', ProductController.deleteOneProduct)

module.exports = router