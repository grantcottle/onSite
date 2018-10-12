const mongoos = require('mongoose');
const Schema = mongoos.Schema;

// Create Schema
const PropertySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Property = mongoos.model('property', PropertySchema);