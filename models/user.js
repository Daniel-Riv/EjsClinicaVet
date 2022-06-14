const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
});
userSchema.methods.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}
userSchema.methods.matchPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}
module.exports = model("User", userSchema);
