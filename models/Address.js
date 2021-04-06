const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  houseNum: String,
  city:String,
  state:String
});

const address = mongoose.model('Address', addressSchema);

module.exports=address