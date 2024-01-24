const mongoose = require('mongoose')

const accountRegisterSchema = mongoose.Schema({
    name: { type: String, require: true, },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true }
})

const RegisterAccountModel = mongoose.model("register", accountRegisterSchema)

module.exports = {
    RegisterAccountModel
}