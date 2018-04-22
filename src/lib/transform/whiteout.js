'use strict';

const whiteout = module.exports = {};

whiteout.convertImage = (bitmapObj, callback) => {
  bitmapObj.colorTable = bitmapObj.colorTable.fill('15');
  return callback(bitmapObj);
};
