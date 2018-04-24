'use strict';

const magenta = module.exports = {};

magenta.convertImage = (bitmapObj) => {
  for (let i = 1; i < bitmapObj.colorTable.length; i += 4) {
    bitmapObj.colorTable[i] = 0;
  }

  return bitmapObj.data;
};
