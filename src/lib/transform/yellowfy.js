'use strict';

const yellowfy = module.exports = {};

yellowfy.convertImage = (bitmapObj) => {
  for (let i = 0; i < bitmapObj.colorTable.length; i += 4) {
    bitmapObj.colorTable[i] = '33';
  }

  return bitmapObj.data;
};
