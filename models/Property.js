const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PropertySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'company'
      },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Property = mongoose.model('property', PropertySchema);