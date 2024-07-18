const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { secretKey } = require('../config/config');

const createUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user with the same username already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create the new user
        const newUser = await User.create({
            username,
            password
        });

        res.status(200).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createUser,
    login
}