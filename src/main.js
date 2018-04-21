'use strict';

const fileReader = require('./lib/reader');
const parseBitmap = require('./lib/parse-bitmap');
const midnight = require('./lib/transform/midnight');

const bitmapPath = `${__dirname}/assets/house.bmp`;

const printBitmap = (file) => {
  console.log(file);
};

const readDataAsync = (path) => {
  fileReader.readAsync(path, (buffer) => {
    printBitmap(path);
    console.log(buffer);
    const bitmapObj = parseBitmap.parse(buffer);

  });
};

readDataAsync(bitmapPath);

//fs.writeFileSync for writing
//get parsed bitmap to transform
