const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    categories: {
        type: Array,
        required: true,
        validate: v => Array.isArray(v) && v.length > 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const image = mongoose.model('image', imageSchema);

module.exports = image;