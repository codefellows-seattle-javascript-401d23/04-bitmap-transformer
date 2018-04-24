'use strict';

const fs = require('fs');
const fileReader = require('./lib/reader');
const parseBitmap = require('./lib/parse-bitmap');
const magenta = require('./lib/transform/magenta');
const midnight = require('./lib/transform/midnight');
const yellowfy = require('./lib/transform/yellowfy');
const nightVision = require('./lib/transform/night-vision');

const bitmapPath = `${__dirname}/assets/house.bmp`;

const imageConverter = (path) => {
  fileReader.readAsync(path, (buffer) => {
    parseBitmap.parse(buffer, (bitmapObj) => {
      // const magentaBitmap = magenta.convertImage(bitmapObj);
      // fs.writeFileSync(`${__dirname}/assets/magenta.bmp`, magentaBitmap);
      // const yellowfyBitmap = yellowfy.convertImage(bitmapObj);
      // fs.writeFileSync(`${__dirname}/assets/yellowfy.bmp`, yellowfyBitmap);
      const midnightBitmap = midnight.convertImage(bitmapObj);
      fs.writeFileSync(`${__dirname}/assets/midnight.bmp`, midnightBitmap);
      // const nightVisionBitmap = nightVision.convertImage(bitmapObj);
      // fs.writeFileSync(`${__dirname}/assets/night-vision.bmp`, nightVisionBitmap);
    });
  });
};

imageConverter(bitmapPath);
