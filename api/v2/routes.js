const express = require('express');
const router = express.Router();
const db = require('../../db'); // Importamos la conexión a la DB

// Obtener todos los productos desde PostgreSQL
router.get('/api/v1/productos', async (req, res) => {
    try {
        const productos = await db.select('*').from('products'); // Consulta con Knex
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error obteniendo los productos' });
    }
});

// Obtener un solo producto por ID
router.get('/api/v1/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await db('products').where({ id }).first();

        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error obteniendo el producto' });
    }
});

module.exports = router;
