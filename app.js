const express = require('express')
const { respuestaVision } = require('./db');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(respuestaVision);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})