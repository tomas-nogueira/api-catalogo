const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors({ credentials: true, origin: 'localhost:3000'}))

app.use(express.static('public'))

const UserRoutes = require('./routes/UserRoutes')
const FunkoRoutes = require('./routes/FunkoRoutes')

app.use('/users', UserRoutes)
app.use('/funko', FunkoRoutes)

app.listen(5000)