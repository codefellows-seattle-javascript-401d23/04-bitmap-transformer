'use strict';

const fs = require('fs');
const logger = require('./lib/logger');
const parseBitmap = require('./lib/parse-bitmap');
const random = require('./lib/random');
const invert = require('./lib/invert');
const intensify = require('./lib/intensify');
const dim = require('./lib/dim');

fs.readFile(`${__dirname}/assets/${process.argv[2]}`, (error, buffer) => {
  if (error) {
    throw error;
  }
  parseBitmap.parse(buffer);
  logger.log(logger.INFO, 'Buffer parsing');

  if (process.argv[4] === 'dim') {
    fs.writeFile(`${__dirname}/__test__/asset/${process.argv[3]}.bmp`, dim(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      return logger.log(logger.VERBOSE, data);
    });
  }

  if (process.argv[4] === 'intensify') {
    fs.writeFile(`${__dirname}/__test__/asset/${process.argv[3]}.bmp`, intensify(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      return logger.log(logger.VERBOSE, data);
    });
  }


  if (process.argv[4] === 'random') {
    fs.writeFile(`${__dirname}/__test__/asset/${process.argv[3]}.bmp`, random(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      return logger.log(logger.VERBOSE, data);
    });
  }

  if (process.argv[4] === 'invert') {
    fs.writeFile(`${__dirname}/__test__/asset/${process.argv[3]}.bmp`, invert(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      return logger.log(logger.VERBOSE, data);
    });
  }
});
