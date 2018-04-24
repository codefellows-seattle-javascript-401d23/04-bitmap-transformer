'use strict';

const nightVision = module.exports = {};

nightVision.convertImage = (bitmapObj) => {
  for (let i = 0; i < bitmapObj.colorTable.length; i += 4) {
    bitmapObj.colorTable[i] = '99';
    bitmapObj.colorTable[i + 2] = 'ff';
  }
  return bitmapObj.data;
};
