const express = require('express');
const adminModel = require('../model/adminModel');
const doctorModel = require('../model/doctorModel');
const patientModel = require('../model/patientModel');
const newsModel = require('../model/newsModel');
const appModel = require('../model/appModel');
const feedModel = require('../model/feedModel');
const adminRoute = express.Router();

adminRoute.get('', (req,res) => {
  res.end("hello from admin");
})

adminRoute.get('/stats', async(req,res) => {
  try {
    const d = await doctorModel.find();
    const p = await patientModel.find();
    const f = await feedModel.find({"type":"feedback"})
    const c = await feedModel.find({"type":"complain"})
    const s = await feedModel.find({"type":"suggetion"})
    const n = await newsModel.find()
    const a = await appModel.find()
    const pena = await appModel.find({"status":"pending"});
    const stats = {"d":d.length,"p":p.length,"f":f.length,"c":c.length,"s":s.length,"n":n.length,"a":a.length,"pena":pena.length}
    res.json({"msg":"Success","value":stats})
  } catch (error) {
    console.log(error)
    res.json({"msg":error})
  }
})

adminRoute.post('/login', async(req,res) => {
  try {
  console.log(req.body)
    const {email,password} = req.body;
  const ad = await adminModel.findOne({email});
  if(!ad){
    res.json({"msg":"User Not Found"});
  }else{
    if (ad.password == password) {
      res.json({"msg":"Success"})
    }else{
      res.json({"msg":"Somthing went wrong "})
    }
  }
  } catch (error) {
    res.json({"msg":error})
  }
  

})

module.exports = adminRoute;