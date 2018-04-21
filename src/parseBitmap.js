'use strict';

const parseBitmap = module.exports = {};
const monoChrome = require('./monoChrome');

parseBitmap.parse = (error, buffer, tType) => {
  if (error) {
    throw error;
  }
  const parsedBitmap = {};
  const FILE_SIZE_OFFSET = 2;
  const HEIGHT_OFFSET = 22;
  const BITCOUNT_OFFSET = 28;
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;

  parsedBitmap.type = buffer.toString('utf-8', 0, 2);
  parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
  parsedBitmap.bitCount = buffer.readInt32LE(BITCOUNT_OFFSET);
  parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);

  console.log(parsedBitmap);

  if (tType === monoChrome) {
    monoChrome.transform(parsedBitmap);
  }
  return parsedBitmap;
};
