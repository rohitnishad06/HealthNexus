const express = require("express");
const appModel = require("../model/appModel");
const appRoute = express.Router();

appRoute.post("", async (req, res) => {
  try {
    await appModel.create(req.body);
    res.json({ msg: "Success" });
  } catch (error) {
    res.json({ msg: error });
  }
});

appRoute.get("", async (req, res) => {
  try {
    const app = await appModel.find().populate("pid").populate("did");    // populate term is work as a foreign key 
    res.json({ msg: "Success", value: app });
  } catch (error) {
    res.json({ msg: error });
  }
});

appRoute.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const app = await appModel.findByIdAndUpdate(id, req.body);
    res.json({ msg: "Success" });
  } catch (error) {
    res.json({ msg: error });
  }
});

appRoute.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const app = await appModel.findByIdAndDelete(id);
    res.json({ msg: "Success" });
  } catch (error) {
    res.json({ msg: error });
  }
});

appRoute.get("/p/:pid", async(req,res) => {
  try {
    const pid = req.params.pid
    const app = await appModel.find({pid:pid}).populate("pid").populate("did")      // 1. pid -> variable ,    2. pid -> schema id
    res.json({"msg":"Success", "value":app})
  } catch (error) {
    res.json({ msg: error });
  }
})

appRoute.get("/d/:did", async(req,res) => {
  try {
    const did = req.params.did
    const app = await appModel.find({did:did}).populate("pid").populate("did")      // 1. pid -> variable ,    2. pid -> schema id
    res.json({"msg":"Success", "value":app})
  } catch (error) {
    res.json({ msg: error });
  }
})

// appRoute.get("/d/:did", async (req, res) => {
//   try {
//     const did = req.params.did;  
//     console.log("Doctor ID from request:", did);  // Debug log

//     const app = await appModel.find({ did: did })
//       .populate("pid")
//       .populate("did");

//     console.log("Appointments fetched:", app);  // Debug log

//     res.json({ msg: "Success", value: app });
//   } catch (error) {
//     console.error("Error in /d/:did route:", error); // Show real error
//     res.json({ msg: error.message });  // send only message
//   }
// });


appRoute.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const app = await appModel.findById(id).populate("pid").populate("did");
    res.json({ msg: "Success", value: app });
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = appRoute;

