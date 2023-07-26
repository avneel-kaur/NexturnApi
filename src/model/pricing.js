const mongoose=require("mongoose");

const pricingTierSchema=new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
});

const discountSchema=new mongoose.Schema({
    name: {type: String, required: true},
    percentage:{ type: Number, required: true},
    amount:{type: Number, required: true},
});

const specialOfferSchema=new mongoose.Schema({
    name: {type: String, required: true},
    percentage:{ type: Number, required: true},
    amount:{type: Number, required: true},
    
});

const pricingSchema=new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref:'Product', required: true},
    pricingTiers:[pricingTierSchema],
    discountTiers:[discountSchema],
    specialTier:[specialOfferSchema]
});

const Pricing=mongoose.model('Pricing', pricingSchema);
module.exports=Pricing;