const express = require('express');
const bodyParser = require('body-parser');
const swaggerMiddleware = require('./docs/swaggerMiddleware');
const jwt = require('jsonwebtoken');
const sequelize = require('./util/db');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());

swaggerMiddleware(app);

// Routes
app.use('/api', routes);

// Protected route
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        res.json({ message: 'This is protected' });
    });
});

// Sync database and start server
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log('Error synchronizing the database: ' + err));
