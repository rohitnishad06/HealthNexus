const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  "email":{
    type:String,
    unique:true
  },
  "password":{
    type:String
  }
});

const adminModel = mongoose.model('admin',adminSchema);

module.exports = adminModel;