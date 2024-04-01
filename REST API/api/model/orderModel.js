const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderSchema = Schema({
  _id:Schema.Types.ObjectId,  // _id keyword is mandatory
  product:{type:Schema.Types.ObjectId,ref:"Product",require:true},
  quantity:{type:Number ,default:1},
});

module.exports = mongoose.model("Order",orderSchema)