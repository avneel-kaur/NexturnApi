const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    productId:{type: Number, required: true},
    productName:{type: String, required: true},
    description:{type: String, required: true},
    category:{type: String, required: true},
    version:{type: String, required: true},
    releaseDate:{type: String, required: true},
    developer:{type: String, required: true},
    website:{type: String, required: true},
    demoUrl:{type: String, required: true},
    downloadUrl:{type: String, required: true},
    supportEmail:{type: String, required: true},
    price:{type: String, required: true},
    systemRequirements:{type: String, required: true},
    features:{type: String, required: true},
    notes:{type: String}
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;