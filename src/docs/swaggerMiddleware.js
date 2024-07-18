const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerConfig');

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
