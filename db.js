const mongoose = require("mongoose");

const mongoDBURL = process.env.MONGODB_URL;

mongoose.connect(mongoDBURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connected Successfully");
});

db.on("disconnected", () => {
  console.log("MongoDB Server Disconnected");
});

db.on("error", (error) => {
  console.log("Error in connecting MongoDB Server", error.message);
});

module.exports = db;
