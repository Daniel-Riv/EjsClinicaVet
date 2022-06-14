const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    nameMascot:{
        type: String,
        required: true
    },
    razaMascot:{
        type: String,
        required: true
    },
    descriptionMascot:{
        type: String,
        required: true
    }
});

module.exports = model("Persona", userSchema);