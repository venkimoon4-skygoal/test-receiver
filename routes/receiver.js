const express = require("express");
const receiveMessagesFromQueue = require("../controllers/receiveMessages");
const router = express();

router.post("/message-from-queue", receiveMessagesFromQueue);

module.exports = router;
