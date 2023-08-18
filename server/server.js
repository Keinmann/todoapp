const PORT = process.env.SERVER_PORT ?? 8000;
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

//get main
// app.get('/', (req, res) =>{
//     const body_data = req.body   
//     res.json(data);
//     res.send("SERVER MAIN");
// });

//signup
app.post('auth/signup', async (req, res) => {
    const { email, password } = req.body;
    console.log("signup", email, password);
    try {
        const signUp = await db.query('INSERT INTO users(email, hashed_password) VALUES($1, $2)', [email, hashedPassword]);
        console.log(signUp);
    } catch (error) {
        console.log(error);
    }
});

app.post('auth/signin', async (req, res) => {
    const { email, password } = req.body;
    console.log("login", email, password);
    try {
        const signIn = await db.query('SELECT hashed_password FROM users WHERE email = $1', [email]);
        console.log(signIn.rows[0]);
        const comparison = await bcrypt.compareSync(password, signIn.rows[0].hashed_password);
        console.log("comparison", comparison);
    } catch (error) {
        console.log(error);
    }
});

app.post('/auth', async (req, res) => {
    const { endpoint, email, password } = req.body;
    console.log(endpoint, email, password);
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    if (endpoint === 'signup') {
        try {
            const signUp = await db.query('INSERT INTO users(email, hashed_password) VALUES($1, $2)', [email, hashedPassword]);
            console.log(signUp);
        } catch (error) {
            console.log(error);
        }
    }
    if (endpoint === 'signin') {
        console.log('signin');
        try {
            const signIn = await db.query('SELECT hashed_password FROM users WHERE email = $1', [email]);
            console.log(signIn.rows[0]);
            const comparison = await bcrypt.compareSync(password, signIn.rows[0].hashed_password);
            console.log("comparison", comparison);
        } catch (error) {
            console.log(error);
        }
    }
});

app.listen(PORT, () => console.log(`SERVING: http://localhost:${PORT}`));