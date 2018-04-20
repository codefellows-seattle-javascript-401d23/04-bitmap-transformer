'use strict';

const fs = require('fs');
const logger = require('./lib/logger');
const parse = require('./lib/parse-bitmap');

fs.readFile(`${__dirname}/__test__/asset/${process.argv[2]}`, (error, buffer) => {
  if (error) {
    logger.log(logger.ERROR, error);
    throw error;
  }
  parse.parse(buffer);
  logger.log(logger.INFO, 'Buffer parsed');

  fs.writeFile(`${__dirname}/__test__/transformations/${process.argv[2]}`, buffer, (error2, data) => {
    if (error2) {
      logger.log(logger.ERROR, error2);
      throw error2;
    }
    logger.log(logger.VERBOSE, data);
  });
});
