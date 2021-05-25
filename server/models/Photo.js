const mongoose = require('mongoose');

const { Schema } = mongoose;

const photoSchema = new Schema({
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    }
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

