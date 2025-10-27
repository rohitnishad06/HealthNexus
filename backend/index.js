const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorRoute");
const patientRoute = require("./routes/patientRoute");
const appRoute = require("./routes/appRoute");
const newsRoute = require("./routes/newsRoute");
const feedRoute = require("./routes/feedRoute");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MongoDB_URL)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log("Error", err));

app.use(express.json());

app.use(cors());

app.use("/api/admin", adminRoute);

app.use("/api/doctor", doctorRoute);

app.use("/api/patient", patientRoute);

app.use("/api/app", appRoute);

app.use("/api/news", newsRoute);

app.use("/api/feed", feedRoute);

app.listen(port, () => console.log(`server is running on port ${port}`));

//usku mlvp oybk gdwn
