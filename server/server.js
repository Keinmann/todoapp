const PORT = process.env.SERVER_PORT ?? 8000;
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/plans/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail;
    try {
        const plans = await db.query('SELECT * FROM plans WHERE user_email = $1', [userEmail]);
        res.json(plans.rows);
    } catch (error) {
        console.log(error);
        res.json(error.detail);
    }
});

//login & register
app.post('/auth', async (req, res) => {
    const { endpoint, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(endpoint);
    if (endpoint === 'signup') {
        try {
            const signUp = await db.query('INSERT INTO users(email, hashed_password) VALUES($1, $2)', [email, hashedPassword]);
            console.log(signUp);
            const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });
            res.json({ email, token });
        } catch (error) {
            console.log(error);
            if (error.code === '23505') {
                res.json({ 'detail': 'email already in use' });
                return;
            }
            res.json({ 'detail': error.detail });
        }
    }
    if (endpoint === 'signin') {
        if (password.length < 1 || email.length < 1) {
            res.json({ 'detail': 'fields must be filled' });
            return;
        }
        try {
            const signIn = await db.query('SELECT hashed_password FROM users WHERE email = $1', [email]);
            const comparison = await bcrypt.compareSync(password, signIn.rows[0].hashed_password);
            console.log("comparison", comparison);
            const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });
            if (comparison) {
                res.json({ email, token });
            } else {
                res.json({ 'detail': 'wrong password' });
            }
        } catch (error) {
            console.log(error);
            res.json({ 'detail': error.detail });
        }
    }
});

app.listen(PORT, () => console.log(`SERVING: http://localhost:${PORT}`));