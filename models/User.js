const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {type:String,required:true},
  email:String,
  address: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Address',
  },
  allAddress:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Address',
}]
});

const users = mongoose.model('User', userSchema);


module.exports=users