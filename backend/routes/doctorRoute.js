const express = require("express");
const doctorModel = require("../model/doctorModel");
const feedModel = require("../model/feedModel");
const appModel = require("../model/appModel");
const doctorRoute = express.Router();

doctorRoute.get("", async (req, res) => {
  try {
    const doc = await doctorModel.find();
    res.json({ "msg": "Success", "value": doc });
  } catch (error) {
    res.json({ "msg": error });
  }
});

doctorRoute.get('/stats/:id', async(req,res) => {
  try {
    const id = req.params.id
    const f = await feedModel.find({"type":"feedback","uid":id})
    const c = await feedModel.find({"type":"complain","uid":id})
    const s = await feedModel.find({"type":"suggetion","uid":id})
    const a = await appModel.find({"did":id})
    const pena = await appModel.find({"status":"pending","did":id});
    const cona = await appModel.find({"status":"confirmed","did":id});
    const coma = await appModel.find({"status":"completed","did":id});
    const cana = await appModel.find({"status":"cancelled","did":id});
    const stats = {"f":f.length,"c":c.length,"s":s.length,"a":a.length,"pena":pena.length,"cona":cona.length,"coma":coma.length,"cana":cana.length,}
    res.json({"msg":"Success","value":stats})
  } catch (error) {
    console.log(error)
    res.json({"msg":error})
  }
})

doctorRoute.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await doctorModel.findById(id);
    res.json({ "msg": "Success", "value": doc });
  } catch (error) {
    res.json({ "msg": error });
  }
});

doctorRoute.post('/login', async(req,res) => {
  try {
  console.log(req.body)
    const {email,password} = req.body;
  const ad = await doctorModel.findOne({email});
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

doctorRoute.post("", async (req, res) => {
  try {
     await doctorModel.create(req.body);
    
    res.json({ "msg": "Success" });
  } catch (error) {
    res.json({ "msg": error });
  }
});

doctorRoute.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await doctorModel.findByIdAndUpdate(id, req.body);
    res.json({ "msg": "Success" });
  } catch (error) {
    res.json({ "msg": error });
  }
});

doctorRoute.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await doctorModel.findByIdAndDelete(id);
    res.json({ "msg": "Success" });
  } catch (error) {
    res.json({ "msg": error });
  }
});

module.exports = doctorRoute;
