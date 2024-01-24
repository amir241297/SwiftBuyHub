const mongoose = require('mongoose')

const productsSchema=mongoose.Schema({
    url:{type: String, require:true},
    price:{type: Number, require:true},
    description:{type: String, require:true},
    brand:{type: String, require:true},
    // gender:{type: String, require:true},
    category:{type: String, require:true},
})

const ProductsModel= mongoose.model("product",productsSchema)

module.exports={
    ProductsModel
}