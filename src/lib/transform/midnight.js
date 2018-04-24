'use strict';

const midnight = module.exports = {};

midnight.convertImage = (bitmapObj) => {
  for (let i = 0; i < bitmapObj.colorTable.length; i += 4) {
    bitmapObj.colorTable[i + 1] = '00';
    bitmapObj.colorTable[i + 2] = '00';
  }

  return bitmapObj.data;
};
