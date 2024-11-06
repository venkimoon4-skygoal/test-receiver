const mongoose = require("mongoose");

const receiveMessageSchema = new mongoose.Schema(
  {
    messageId: {
      type: String,
      default: "",
    },
    messageObject: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "RECEIVED",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("receiveMessages", receiveMessageSchema);
