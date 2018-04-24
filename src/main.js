'use strict';

//const imageConverter = module.exports = {};

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
      if (process.argv[3] === 'magenta') {
        const magentaBitmap = magenta.convertImage(bitmapObj);
        fs.writeFileSync(`${__dirname}/assets/magenta.bmp`, magentaBitmap);
      }
      if (process.argv[3] === 'yellowfy') {
        const yellowfyBitmap = yellowfy.convertImage(bitmapObj);
        fs.writeFileSync(`${__dirname}/assets/yellowfy.bmp`, yellowfyBitmap);
      }
      if (process.argv[3] === 'midnight') {
        const midnightBitmap = midnight.convertImage(bitmapObj);
        fs.writeFileSync(`${__dirname}/assets/midnight.bmp`, midnightBitmap);
      }
      if (process.argv[3] === 'nightVision') {
        const nightVisionBitmap = nightVision.convertImage(bitmapObj);
        fs.writeFileSync(`${__dirname}/assets/night-vision.bmp`, nightVisionBitmap);
      }
    });
  });
};

imageConverter(bitmapPath);
