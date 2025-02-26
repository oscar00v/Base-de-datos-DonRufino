const Product = require('../models/Products'); // Importar modelo correcto

const create = async (req, res) => {
    Product.create(req.body)
        .then(product => res.status(201).json(product))
        .catch(error => res.status(400).json({ error: error.message }));
};

// Obtener todos los productos
const findAllProducts = (req, res) => {
    Product.findAll()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error: error.message }));
};

// Obtener un producto por ID
const findOneProduct = (req, res) => {
    Product.findOne(req.params.id)
        .then(product => {
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        })
        .catch(error => res.status(400).json({ error: error.message }));
};

// Actualizar un producto
const updateOneProduct = (req, res) => {
    Product.update(req.params.id, req.body)
        .then(product => res.status(200).json(product))
        .catch(error => res.status(400).json({ error: error.message }));
};

// Borrado lógico (si agregaste `active` en la tabla)
const softDeleteOneProduct = (req, res) => {
    Product.softDelete(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(error => res.status(400).json({ error: error.message }));
};

// Eliminación definitiva
const deleteOneProduct = (req, res) => {
    Product.hardDelete(req.params.id)
        .then(() => res.status(204).send()) // No devuelve contenido si se borra correctamente
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports = {
    create,
    findAllProducts,
    findOneProduct,
    updateOneProduct,
    softDeleteOneProduct,
    deleteOneProduct, // Corregido el nombre de la función
};
