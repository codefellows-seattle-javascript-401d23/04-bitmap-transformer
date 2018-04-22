'use strict';

const fs = require('fs');
const fileReader = require('./lib/reader');
const parseBitmap = require('./lib/parse-bitmap');
const midnight = require('./lib/transform/midnight');
const whiteout = require('./lib/transform/whiteout');
const redden = require('./lib/transform/redden');

const bitmapPath = `${__dirname}/assets/house.bmp`;

const imageConverter = (path) => {
  fileReader.readAsync(path, (buffer) => {
    parseBitmap.parse(buffer, (bitmapObj) => {
      // console.log(bitmapObj.data.length, bitmapObj.colorTable);
      //   console.log('raster size', bitmapObj.rasterDataString.length);
      whiteout.convertImage(bitmapObj, (newObj) => {
        // console.log('new', newObj.data.length, newObj.colorTable);
        fs.writeFileSync(`${__dirname}/assets/whiteout.bmp`, newObj.data);
      });
      redden.convertImage(bitmapObj, (newObj) => {
        console.log('original', bitmapObj.data.length);
        fs.writeFileSync(`${__dirname}/assets/redden.bmp`, newObj.data);
        console.log('newBuffer', newObj.data.length);

      });
    });
  });
};

imageConverter(bitmapPath);

console.log('done');

// fs.writeFileSync for writing
// get parsed bitmap to transform
