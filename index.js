require('dotenv').config();
const express = require('express');
const server = express();


server.use(express.json());
server.get('/', (req, res) => {
    res.send("<h1>HELLO WORLD, from backend</h1>");
})

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})