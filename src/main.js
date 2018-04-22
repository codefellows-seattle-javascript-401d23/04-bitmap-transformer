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
      console.log(bitmapObj);
        console.log('raster size', bitmapObj.rasterDataString.length);
      whiteout.convertImage(bitmapObj, (newObj) => {
        fs.writeFileSync(`${__dirname}/assets/whiteout.bmp`, newObj.data);
        // console.log('new', bitmapObj.colorTable);
      });
      redden.convertImage(bitmapObj, (newBuffer) => {
        console.log('buffer2', buffer0);
        // console.log(('new length', newBuffer.length));
        // console.log('header length', )
        // console.log('lengths 3', bitmapObj.colorTable.length);
        fs.writeFileSync(`${__dirname}/assets/redden.bmp`, newBuffer);
        // console.log('newBuffer', newBuffer.length);

      });
    });
  });
};

imageConverter(bitmapPath);

console.log('done');

// fs.writeFileSync for writing
// get parsed bitmap to transform
