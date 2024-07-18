require('dotenv').config();
const { Sequelize } = require('sequelize');
const { dbHost, dbName, dbPassword, dbUser, dbDialect } = require('../config/config');

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize