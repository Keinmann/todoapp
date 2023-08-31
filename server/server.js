const PORT = process.env.SERVER_PORT ?? 8000;
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

//plans GET
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

//plans CREATE
app.post('/plans', async (req, res) => {
    const { user_email, title, description, date, progress } = req.body;
    try {
        const postPlan = await db.query('INSERT INTO plans(user_email, title, description, date, progress) VALUES($1, $2, $3, $4, $5)', [user_email, title, description, date, progress]);
        res.json(postPlan);
    } catch (error) {
        console.log(res.json(error.detail));
    }
});
//plans DELETE
app.delete('/plans', async (req, res) => {
    const { id } = req.body;
    try {
        const deletePlan = await db.query('DELETE FROM plans WHERE id = $1', [id]);
        res.json(deletePlan);
    } catch (error) {
        console.log(error.detail);
        res.json(error.detail);
    }
});
//plans EDIT
app.put('/plans/:id', async (req, res) => {
    const { id } = req.params;
    const { user_email, title, description, date, progress } = req.body;
    try {
        const putPlan = await db.query('UPDATE plans SET title = $1, description = $2, date = $3, progress = $4 WHERE id = $5', [title, description, date, progress, id]);
        res.json(deletePlan);
    } catch (error) {
        console.log(error.detail);
        res.json(error.detail);
    }
});

//auth LOGIN & REGISTER
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