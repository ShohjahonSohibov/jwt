const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Specify the OpenAPI version
        info: {
            title: 'Your API', // Title of the API
            version: '1.0.0', // Version of the API
            description: 'API documentation for your project', // Description of the API
        },
    },
    apis: ['./src/routes/*.js'], // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
