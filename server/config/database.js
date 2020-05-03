const mongoose = require('mongoose')

const configureDB = () => {
mongoose.connect('mongodb://localhost:27017/jan-db',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('connected to task-manager --> jan-db')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = configureDB