const knex = require('knex');

const create = (bodyProduct)    => {
    return knex
    .insert(bodyProduct)
    .into('products')
    .returning(['id', 'name', 'price', 'description', 'sku']);
}


module.exports = {
    create,
}