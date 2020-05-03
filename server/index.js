const express = require('express')
const port = 3033

const app = express()

const configureDB = require('./config/database')
configureDB()

app.use(express.json())

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port, () => {
    console.log('*** OPENED PORT ON', port)
})