const ReceivedMessages = require("../models/receiveMessages.js");
const _ = require("lodash");
const receiveMessagesFromQueue = async (req, res) => {
  try {
    const { msgResp } = req.body;

    if (_.isEmpty(msgResp)) {
      return res
        .status(400)
        .json({ message: "message received from queue is empty" });
    }

    const findMessage = await ReceivedMessages.findOne({
      messageId: msgResp.messageId,
    });

    if (!_.isEmpty(findMessage)) {
      return res.status(400).json({ message: "Message already exist" });
    }

    const data = {
      messageId: msgResp.messageId,
      messageObject: msgResp.messageObject,
    };

    const newMessage = await ReceivedMessages.create(data);

    return res.status(200).json({ message: "Message Received Successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = receiveMessagesFromQueue;
