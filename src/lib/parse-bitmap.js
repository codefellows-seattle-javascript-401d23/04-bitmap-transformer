'use strict';

const logger = require('./logger');

const parseBitmap = module.exports = {};

parseBitmap.parse = (buffer) => {
  logger.log(logger.INFO, 'Parsing Buffer');
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;

  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.size = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);
  logger.log(logger.VERBOSE, parsedBitmap);

  return parsedBitmap;
};
