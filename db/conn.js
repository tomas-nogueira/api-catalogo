const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/api-catalogo')
    console.log('Conectamos ao Mongoose com sucesso')
}

main().catch((err) => console.log(err))

module.exports = mongoose