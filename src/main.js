'use strict';

const fs = require('fs');
const logger = require('./lib/logger');
const parse = require('./lib/parse-bitmap');
const white = require('./lib/transform-white');
const invert = require('./lib/transform-invert');
const toxic = require('./lib/transform-toxic');
const random = require('./lib/transform-random');

fs.readFile(`${__dirname}/__test__/asset/${process.argv[2]}`, (error, buffer) => {
  if (error) {
    logger.log(logger.ERROR, error);
    throw error;
  }
  parse.parse(buffer);
  logger.log(logger.INFO, 'Buffer parsed');

  if (process.argv[4] === 'white') {
    fs.writeFile(`${__dirname}/__test__/transformations/${process.argv[3]}.bmp`, white(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      logger.log(logger.VERBOSE, data);
    });
  }

  if (process.argv[4] === 'invert') {
    fs.writeFile(`${__dirname}/__test__/transformations/${process.argv[3]}.bmp`, invert(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      logger.log(logger.VERBOSE, data);
    });
  }

  if (process.argv[4] === 'toxic') {
    fs.writeFile(`${__dirname}/__test__/transformations/${process.argv[3]}.bmp`, toxic(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      logger.log(logger.VERBOSE, data);
    });
  }

  if (process.argv[4] === 'random') {
    fs.writeFile(`${__dirname}/__test__/transformations/${process.argv[3]}.bmp`, random(buffer), (error2, data) => {
      if (error2) {
        return logger.log(logger.ERROR, error2);
      }
      logger.log(logger.VERBOSE, data);
    });
  }
});

