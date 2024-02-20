const mongoose = require('../db/conn')
const { Schema } = mongoose

const Funko = mongoose.model(
    'Funko',
    new Schema(
        {
            name: {
                type: String,
                required: true,
              },
              description: {
                type: String,
                required: true,
              },
              year: {
                type: String,
                required: true,
              },
              value: {
                type: String,
              },
              category: {
                type: String,
                required: true,
              },
              image: {
                type: String, //forma de colocar multiplos dados em um campo - array
                required: true,
              },
        },
        {timestamps: true},
    )
)

module.exports = Funko