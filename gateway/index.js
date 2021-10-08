const express = require('express')
const app = express()
const os = require('os')
const commandService = require('./command.service')
const port = process.env.PORT

app.put('/entretaiment/block', (req, res) => {
    commandService('block')
})

app.put('/entretaiment/allow', (req, res) => {
    commandService('allow')
})

app.listen(port, () => {
    console.log(`command-gateway is listening at http://${os.hostname()}:${port}`)
})