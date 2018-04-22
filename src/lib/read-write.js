const fs = require('fs');

const logger = require('./logger');

const fileHandler = module.exports = {};

fileHandler.read = (filePath, callback) => {
  return fs.readFile(filePath, (error, buffer) => {
    if (error) {
      throw error;
    }
    return callback(null, buffer);
  });
};

fileHandler.write = (buffer) => {
  // SARAH - TODO: change to real folder when in production!! (is in test now)
  const newFilePath = `${__dirname}/../__test__/assets/${process.argv[3]}`;
  return fs.writeFile(newFilePath, buffer, () => {
    logger.log(logger.VERBOSE, 'Testing transforms!!');
  });
};
