'use strict';

const flipBitmap = module.exports = {};
// const parseBitmap = require('./parse-bitmap');

flipBitmap.flip = (parsedBuffer, callback) => {
  // Sean - TODO: Add error Checks
  const pixalTableBuffer = parsedBuffer.pixalTable;
  pixalTableBuffer.reverse();
  return callback(parsedBuffer.allData);
};
