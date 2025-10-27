const mongoose = require('mongoose');
const doctorSchema = mongoose.Schema({
  "name":{
    type:String,
    require:true
  },
  "mobile":{
    type:String,
    require:true
  },
  "email":{
    type:String,
    require:true,
    unique:true
  },
  "password":{
    type:String,
    require:true
  },
  "gender":{
    type:String,
    require:true
  },
  "exp":{
    type:String,
    require:true
  },
  "quali":{
    type:String,
    require:true
  },
  "speci":{
    type:String,
    require:true
  },
  "address":{
    type:String,
    require:true
  },
  "status":{
    type:String,
    default:'u'    // u -> unblock [active], b -> block [inactive]
  }
},{
  timestamps:true 
});

const doctorModel = mongoose.model('doctor',doctorSchema);

module.exports = doctorModel;