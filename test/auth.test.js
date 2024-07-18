const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('../src/routes/user');
const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);

describe('POST /auth/login', () => {
    it('should return a token when given valid credentials', (done) => {
        request(app)
            .post('/auth/login')
            .send({ username: 'john', password: 'john' })
            .expect(200)
            .expect((res) => {
                res.body.token = 'string';
            })
            .end(done);
    });

    it('should return 400 when given invalid credentials', (done) => {
        request(app)
            .post('/auth/login')
            .send({ username: 'wronguser', password: 'wrongpassword' })
            .expect(400)
            .end(done);
    });
});
