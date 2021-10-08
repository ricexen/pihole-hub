const express = require('express')
const app = express()
const port = 3000

app.put('/entretaiment/block', (req, res) => {
})

app.put('/entretaiment/allow', (req, res) => {
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})