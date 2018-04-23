const fs = require('fs');

const logger = require('./logger');

const fileHandler = module.exports = {};

fileHandler.read = (filePath, callback) => {
  return fs.readFile(filePath, (error, buffer) => {
    if (error) {
      callback(error);
    }
    const type = process.argv[4];
    return callback(null, buffer, type);
  });
};

fileHandler.write = (buffer, newFilePath) => {
  return fs.writeFile(newFilePath, buffer, (error) => {
    if (error) {
      logger.log(logger.ERROR, `fileHandler.write: ${error}`);
    }
    logger.log(logger.VERBOSE, `File created at ${newFilePath}`);
  });
};
