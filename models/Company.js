const mongoos = require('mongoose');
const Schema = mongoos.Schema;

// Create Schema
const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    properties: {
        type: Schema.Types.ObjectId,
        ref: 'property'
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Company = mongoos.model('company', CompanySchema);