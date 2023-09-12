const mongoose = require('mongoose');


const personSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "You must include a name"]
    }
});

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
