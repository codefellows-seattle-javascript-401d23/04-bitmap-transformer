const fs = require('fs');

const logger = require('./logger');

const fileHandler = module.exports = {};

fileHandler.read = (filePath, callback) => {
  return fs.readFile(filePath, (error, buffer) => {
    if (error) {
      logger.log(logger.ERROR, `fileHandler.read: ${error}`);
      return callback(error);
    }
    const type = process.argv[4];
    return callback(null, buffer, type);
  });
};

fileHandler.write = (buffer, newFilePath, callback) => {
  return fs.writeFile(newFilePath, buffer, (error) => {
    if (error) {
      logger.log(logger.ERROR, `fileHandler.write: ${error}`);
      return callback(error);
    }
    logger.log(logger.VERBOSE, `File created at ${newFilePath}`);
    return callback();
  });
};
