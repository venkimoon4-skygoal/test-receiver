const ReceivedMessages = require("../models/receiveMessages.js");
const _ = require("lodash");
const {
  failure_response,
  success_response,
} = require("../responses/response.js");
const receiveMessagesFromQueue = async (req, res) => {
  try {
    const { msgResp } = req.body;

    if (_.isEmpty(msgResp)) {
      return res
        .status(400)
        .json(
          failure_response(
            400,
            "message is empty",
            { message: "message is empty" },
            false
          )
        );
    }

    const findMessage = await ReceivedMessages.findOne({
      messageId: msgResp.messageId,
    });

    if (!_.isEmpty(findMessage)) {
      return res
        .status(400)
        .json(
          failure_response(
            400,
            "message already exist",
            { message: "message already exist" },
            false
          )
        );
    }

    const data = {
      messageId: msgResp.messageId,
      messageObject: msgResp.messageObject,
    };

    const newMessage = await ReceivedMessages.create(data);

    return res
      .status(200)
      .json(
        success_response(
          200,
          "message processed successfully",
          { message: "message processed successfully" },
          true
        )
      );
  } catch (error) {
    return res
      .status(400)
      .json(
        failure_response(
          400,
          "Something went wrong",
          { message: error.message },
          false
        )
      );
  }
};

module.exports = receiveMessagesFromQueue;
