const knex = require('../db');

const create = (bodyProduct) => {
    return knex('products')
        .insert(bodyProduct)
        .returning(['id', 'name', 'price', 'description', 'sku']);
};

// Read
const findAll = () => {
    return knex
        .select('*')
        .from('products');
};

const findOne = (productId) => {
    return knex
        .select('*')
        .from('products')
        .where({ id: productId }) // Corregido de product_id a id
        .first(); // Devolver solo un objeto
};

// Update
const update = (productId, bodyProduct) => {
    return knex('products')
        .where({ id: productId }) // Corregido de product_id a id
        .update(bodyProduct)
        .returning(['id', 'name', 'price', 'description', 'sku']);
};

// Soft Delete (Si agregas la columna active)
const softDelete = (productId) => {
    return knex('products')
        .where({ id: productId }) // Corregido
        .update({ active: false }) // Si decides agregar una columna active
        .returning(['id', 'name', 'price', 'description', 'sku']);
};

// Hard Delete
const hardDelete = (productId) => {
    return knex('products')
        .where({ id: productId }) // Corregido
        .del();
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    softDelete,
    hardDelete
};