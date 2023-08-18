const PORT = process.env.SERVER_PORT ?? 8000;
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
app.use(cors());
//get main
// app.get('/', (req, res) =>{
//     const body_data = req.body   
//     res.json(data);
//     res.send("SERVER MAIN");
// });

//signup
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    // console.log("signup", req);
    // console.log();
    console.log("signup :", email, password);
});

app.listen(PORT, () => console.log(`SERVING: http://localhost:${PORT}`));