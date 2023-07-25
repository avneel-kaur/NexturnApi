const mongoose = require('mongoose');

const providerSchema=new mongoose.Schema({
   providerId:{type: Number, required: true},
   productId:{type: Number, required: true},
   providerName:{type: String, required: true},
   providerContactPerson:{type: String, required: true},
   providerEmail:{type: String, required: true},
   providerPhoneNumber:{type: String, required: true},
   providerAddress:{type: String, required: true},
   providerWebsite:{type: String, required: true},
   provisionCost:{type: String, required: true},
    provisionQuantity:{type: String, required: true},
    provisionDate:{type: String, required: true},
    contractExpiryDate:{type: String, required: true},
    notes:{type: String}
})

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;