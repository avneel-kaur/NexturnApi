const mongoose = require('mongoose');
const User = require('./users');
const Product = require('./product');

const billingSchema=new mongoose.Schema({
    billingId:{type: Number, required: true},
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    invoiceNumber:{type: String, required: true},
    customerNumber:{type: String, required: true},
    billingAddress:{type: String, required: true},
    billingDate: { type: Date, default: Date.now },
    paymentDueDate:{type: Date, required: true},
    amountDue:{type: Number, required: true},
    paymentStatus:{type: String, required: true}
})

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;