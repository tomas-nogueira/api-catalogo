const Funko = require("../models/Funko")

module.exports = class FunkoController {
    static async create(req, res) {
        res.json('Hello Funkoooo')
    }
}