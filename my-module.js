const { constantCase } = require("change-case");

function myFunction(message) {
  return constantCase("Hello, " + message);
}

module.exports = myFunction;
