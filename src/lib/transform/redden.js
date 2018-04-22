'use strict';

const redden = module.exports = {};

redden.convertImage = (bitmapObj, callback) => {

  // bitmapObj.colorArray.forEach((hexString) => {
  //   hexString.replace(/a/g, '9');
  // });

  let HexString = bitmapObj.colorArray.join('');
  let modifiedHexString = HexString.replace(/a/g, '9');

  bitmapObj.colorTable.fill(modifiedHexString, 0, bitmapObj.colorTable.length)

  // const newBuffer = Buffer.alloc(66616, `${bitmapObj.headersString}${modifiedHexString}${bitmapObj.rasterDataString}`, 'hex');

  // console.log('newColorArray', modifiedHexString);
  return callback(bitmapObj);
};
