const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);