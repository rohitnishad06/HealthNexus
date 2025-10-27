const express = require("express");
const patientModel = require("../model/patientModel");
const sendmail = require("../sendMail");
const feedModel = require("../model/feedModel");
const appModel = require("../model/appModel");
const patientRoute = express.Router();

patientRoute.get("", async (req, res) => {
  try {
    const patient = await patientModel.find();
    res.json({ "msg": "Success", value: patient });
  } catch (error) {
    res.json({ "msg": error });
  }
});

patientRoute.get('/stats/:id', async(req,res) => {
  try {
    const id = req.params.id
    const f = await feedModel.find({"type":"feedback","uid":id})
    const c = await feedModel.find({"type":"complain","uid":id})
    const s = await feedModel.find({"type":"suggetion","uid":id})
    const a = await appModel.find({"pid":id})
    const pena = await appModel.find({"status":"pending","pid":id});
    const cona = await appModel.find({"status":"confirmed","pid":id});
    const coma = await appModel.find({"status":"completed","pid":id});
    const cana = await appModel.find({"status":"cancelled","pid":id});
    const stats = {"f":f.length,"c":c.length,"s":s.length,"a":a.length,"pena":pena.length,"cona":cona.length,"coma":coma.length,"cana":cana.length,}
    res.json({"msg":"Success","value":stats})
  } catch (error) {
    console.log(error)
    res.json({"msg":error})
  }
})

patientRoute.get('/:id',async(req,res) => {
  try {
    const id = req.params.id
    const patient = await patientModel.findById(id);
    res.json({ "msg": "Success", value: patient });
  } catch (error) {
     res.json({ "msg": error });
  }
});

patientRoute.post('/login', async(req,res) => {
  try {
  console.log(req.body)
    const {email,password} = req.body;
  const ad = await patientModel.findOne({email});
  if(!ad){
    res.json({"msg":"User Not Found"});
  }else{
    if (ad.password == password) {
      res.json({"msg":"Success","id":ad._id})
    }else{
      res.json({"msg":"Somthing went wrong "})
    }
  }
  } catch (error) {
    res.json({"msg":error})
  }
})

patientRoute.post('', async(req,res) => {
  try {
    const patient = await patientModel.create(req.body);
    sendmail(req.body.email, "Registration Succesful", `Welcome to health Nexus \n hello ${req.body.name}, \n Your Registration   was Successful\n`);
    res.json({ "msg": "Success", value: patient });
  } catch (error) {
      res.json({ "msg": error });
  }
})

patientRoute.put('/:id',async(req,res) => {
  try {
    const id = req.params.id
  const patient = await patientModel.findByIdAndUpdate(id,req.body)
   res.json({ "msg": "Success", value: patient });
  } catch (error) {
    res.json({ "msg": error });
  }
})

patientRoute.delete('/:id',async(req,res) => {
  try {
    const id = req.params.id
  await patientModel.findByIdAndDelete(id)
  res.json({ "msg": "Success"});
  } catch (error) {
    console.log(error)
    res.json({ "msg": error });
  }
})

module.exports = patientRoute;