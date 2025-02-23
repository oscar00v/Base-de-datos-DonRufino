// Para definir rutas en un archivo separado, usando Express, se debe configurar un Router. Un Router es un objeto que permite definir rutas y agruparlas. Para crear un Router, se debe llamar a la función Router() de express. Luego, se pueden definir rutas en el Router, de la misma forma que se hace en una aplicación de express.
const express = require('express')

//mando a llamar a la función Router de express
const router = express.Router()


const productos = [
    {
        id: 1,
        nombre: 'Coca Cola',
        precio: 15
    },
    {
        id: 2,
        nombre: 'Pepsi',
        precio: 12
    },
    {
        id: 3,
        nombre: 'Boing',
        precio: 10
    }
]

router.get('/api/v1/productos', (req, res) => {
    res.json(productos)
})  

//un param sirve para hacer una ruta dinámica. por ejemplo, si quiero obtener un producto en específico, puedo hacerlo con un parámetro

router.get('/api/v1/productos/:id', (req, res) => {
    console.log(req.params.id)
    const productosID= req.params.id

    const Oneproduct = productos.find(producto => producto.id === parseInt(productosID))
    if(!Oneproduct) {
        return res.status(404).json({message: 'Producto no encontrado'})
    }
    res.json(Oneproduct)

    // const producto = productos.find(producto => producto.id === parseInt(productosID))
    // res.json(productos)
})

module.exports = router