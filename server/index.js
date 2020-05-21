const express = require('express')
const port = 3033

const app = express()

const configureDB = require('./config/database')
configureDB()

app.use(express.json())

app.use(function(req , res , next){
    console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
    next()
})

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port, () => {
    console.log('*** OPENED PORT ON', port)
})