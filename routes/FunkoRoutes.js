const router = require('express').Router()

const FunkoController = require('../controllers/FunkoController')

router.post('/create', FunkoController.create)

module.exports = router