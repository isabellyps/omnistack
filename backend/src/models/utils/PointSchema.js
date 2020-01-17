const mongoose = require('mongoose');

//consta na documentação do mongo
const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

module.exports = PointSchema;