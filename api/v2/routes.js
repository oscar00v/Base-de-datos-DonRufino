const express = require('express');
const router = express.Router();
const db = require('../../db'); // Importamos la conexión a la base de datos

// ✅ Obtener todos los productos
router.get('/api/v1/products', async (req, res) => {
  try {
    const products = await db.select('*').from('products');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo los productos' });
  }
});

// ✅ Obtener un producto por ID
router.get('/api/v1/products/:id', async (req, res) => {
  try {
    const product = await db('products').where({ id: req.params.id }).first();
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo el producto' });
  }
});

// ✅ Obtener todos los clientes
router.get('/api/v1/clients', async (req, res) => {
  try {
    const clients = await db.select('*').from('clients');
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo los clientes' });
  }
});

// ✅ Obtener un cliente por ID
router.get('/api/v1/clients/:id', async (req, res) => {
  try {
    const client = await db('clients').where({ id: req.params.id }).first();
    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo el cliente' });
  }
});

// ✅ Obtener todas las ventas
router.get('/api/v1/sales', async (req, res) => {
  try {
    const sales = await db.select('*').from('sales');
    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo las ventas' });
  }
});

// ✅ Obtener una venta específica por ID
router.get('/api/v1/sales/:id', async (req, res) => {
  try {
    const sale = await db('sales').where({ id: req.params.id }).first();
    if (!sale) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }
    res.json(sale);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo la venta' });
  }
});

// ✅ Obtener todos los detalles de ventas
router.get('/api/v1/sales-details', async (req, res) => {
  try {
    const salesDetails = await db.select('*').from('sales_details');
    res.json(salesDetails);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo los detalles de ventas' });
  }
});

// ✅ Obtener los detalles de una venta específica por ID
router.get('/api/v1/sales-details/:id', async (req, res) => {
  try {
    const saleDetail = await db('sales_details').where({ id: req.params.id }).first();
    if (!saleDetail) {
      return res.status(404).json({ error: 'Detalle de venta no encontrado' });
    }
    res.json(saleDetail);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo el detalle de venta' });
  }
});

module.exports = router;
