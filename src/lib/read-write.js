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
  return fs.writeFile(`${__dirname}/../__test__/assets/house-test-transform.bmp`, buffer, () => {
    logger.log(logger.VERBOSE, 'Testing transforms!!');
  });
};
