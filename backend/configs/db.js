const mongoose = require('mongoose')
require('dotenv').config({ path: "./.env/mongooseURL" })
const connection = mongoose.connect(process.env.mongooseURL) 


module.exports = { connection }
  