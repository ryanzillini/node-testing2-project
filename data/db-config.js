const knex = require("knex");
const knexConfig = require("../knexfile");
const environment = process.env.NODE_ENV || "developnent";

module.exports = knex[knexConfig[environment]];
