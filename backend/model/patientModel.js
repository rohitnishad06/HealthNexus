const mongoose = require('mongoose');
const patientSchema = mongoose.Schema({
  "name":{
    type:String,
    require:true
  },
  "number":{
    type:String,
    require:true
  },
  "altnumber":{
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
  "age":{
    type:String,
    require:true
  },
  "bloodgrp":{
    type:String,
    require:true
  },
  "address":{
    type:String,
    require:true
  },
  "status":{
    type:String,
    default:"u"    // u -> unblock [active], b -> block [inactive]
  }
},{
  timestamps:true 
});

const patientModel = mongoose.model('patient',patientSchema);

module.exports = patientModel;