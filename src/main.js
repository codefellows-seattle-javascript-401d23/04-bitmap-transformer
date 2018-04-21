'use strict'

const fs = require('fs');
const parseBitmap = require('./lib/parse-bitmap');
const invertColors = require('./lib/invert-colors');
// const lightenColors = require('./lib/lighten-colors');

// todo: take in <input file name>, <output file name>, <transform> from user

const inputPath = `${__dirname}/assets/house.bmp`;
const outputPath = `${__dirname}/assets/newBitmap.bmp`;
// const transform = 'lighten';
const transform = 'invert';

fs.readFile(inputPath, (error, buffer) => {
  if (error) {
    throw error;
  }
  console.log(parseBitmap.parse(buffer));

  // todo: maybe move 'if' logic into a file that takes in transform name and buffer, handles transform, and returns transformed buffer
  if (transform === 'invert') {
    invertColors.invert(buffer, (invertedBuffer) => {
      fs.writeFile(outputPath, invertedBuffer, (err) => {
        if (err) {
          throw err;
        }
        console.log('buffer written to newBitmap.bmp');
      });
    });
  }

  console.log(parseBitmap.parse(buffer));
});
