const mongoose = require('mongoose');

const billingSchema=new mongoose.Schema({
    billingId:{type: Number, required: true},
    userId:{type: Number, required: true},
    productId:{type: String, required: true},
    invoiceNumber:{type: String, required: true},
    customerNumber:{type: String, required: true},
    billingAddress:{type: String, required: true},
    billingDate:{type: String, required: true},
    paymentDueDate:{type: String, required: true},
    amountDue:{type: String, required: true},
    paymentStatus:{type: String, required: true}
})

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;