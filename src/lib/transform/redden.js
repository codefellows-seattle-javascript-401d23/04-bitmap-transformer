'use strict';

const redden = module.exports = {};

redden.convertImage = (bitmapObj, callback) => {

  bitmapObj.colorArray.forEach((hexString) => {
    hexString.replace(/a/g, '9');
  });

  let modifiedHexString = bitmapObj.colorArray.join('');

  bitmapObj.colorTable = bitmapObj.colorTable.fill(modifiedHexString);

  return callback(bitmapObj);
};
