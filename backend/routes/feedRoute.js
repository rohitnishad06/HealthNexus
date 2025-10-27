const express = require('express');
const feedModel = require('../model/feedModel');
const feedRoute = express.Router();

feedRoute.get('', async(req,res) => {
  try {
    const feed = await feedModel.find().populate("uid");
    res.json({"msg":"Success","value":feed})
  } catch (error) {
    res.json({"msg":error})
  }
})

feedRoute.get('/u/:uid', async(req,res) => {
  try {
    const id = req.params.uid;
    const feed = await feedModel.find(({"uid":id}))
    res.json({"msg":"Success","value":feed})
  } catch (error) {
    res.json({"msg":error})
  }
})

feedRoute.post('', async(req, res) => {
  try {
    await feedModel.create(req.body);
    res.json({"msg":"Success"})
  } catch (error) {
     res.json({"msg":error})
  }
})

feedRoute.put('/:id', async(req, res) => {
  try {
    const id = req.params.id
    const feed = await feedModel.findByIdAndUpdate(id,req.body);
    res.json({"msg":"Success"})
  } catch (error) {
    res.json({"msg":error})
  }
})

feedRoute.delete('/:id', async(req,res) => {
  try {
    const id = req.params.id
    const feed = await feedModel.findByIdAndDelete(id);
    res.json({"msg":"Success"})
  } catch (error) {
    res.json({"msg":error})
  }
})

module.exports = feedRoute;