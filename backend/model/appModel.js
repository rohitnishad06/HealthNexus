const mongoose = require("mongoose");
const appSchema = mongoose.Schema(
  {
    pid: {
      type: String,
      ref: "patient",
      require: true,
    },
    did: {
      type: String,
      ref: "doctor",
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    slot: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);
const appModel = mongoose.model("app", appSchema);

module.exports = appModel;
