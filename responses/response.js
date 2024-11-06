const _ = require("lodash");

const success_response = (code, message, response, status) => {
  if (!_.isInteger(code)) {
    return console.error("Status Code is Required");
  }
  if (_.isEmpty(message)) {
    return console.error("Message is Required");
  }
  if (!_.isObject(response)) {
    return console.error("Response Should be an Object");
  }
  if (!_.isBoolean(status)) {
    return console.error("Status is Required");
  }

  return { code, message, response: response || {}, status };
};

const failure_response = (code, message, response, status) => {
  if (!_.isInteger(code)) {
    return console.error("Code is empty");
  }

  if (_.isEmpty(message)) {
    return console.error("message is empty");
  }

  if (!_.isObject(response)) {
    return console.error("response is not object");
  }
  if (!_.isBoolean(status)) {
    return console.error("status is empty");
  }
  return { code, message, response: response || {}, status };
};
module.exports = { success_response, failure_response };
