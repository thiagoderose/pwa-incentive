const { buildStartupMessage } = require('./builders');
const { server } = require('./constants');

const handleServerListen = (err) => {
  if(err) throw err;
  handleServerSuccessfulStartup()
};

const handleServerSuccessfulStartup = (port=server.port) => {
  const message = buildStartupMessage(port);

  console.log(message);
};

module.exports.handleServerListen = handleServerListen;
