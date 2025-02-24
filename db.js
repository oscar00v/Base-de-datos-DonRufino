const knex = require('knex');
const config = require('./knexfile');

//conectar usado la configuracion de development
const db = knex(config.development);

module.exports = db;