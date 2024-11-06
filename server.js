const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const db = require("./db.js");
const app = express();
const ReceiverRouter = require("./routes/receiver.js");

app.use(express.json());
app.use("/receive", ReceiverRouter);

app.listen(4000, () => {
  console.log("Listening to Port 4000");
});
