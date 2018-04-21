'use strict';

const fs = require('fs');
const logger = require('./lib/logger');
const readline = require('readline');
const parseBitmap = require('./lib/parse-bitmap');
const invertColors = require('./lib/invert-colors');
const lightenColors = require('./lib/lighten-colors');

// todo: take in <input file name>, <output file name>, <transform> from user


const inputPath = `${__dirname}/assets/house.bmp`;
const outputPath = `${__dirname}/assets/newBitmap.bmp`;
let transform = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter a transform name. Choices: "invert" or "lighten".\n', (transformName) => {
  console.log('processing...');
  transform = transformName;
  rl.close();
  fs.readFile(inputPath, (error, buffer) => {
    if (error) {
      throw error;
    }
    // console.log(parseBitmap.parse(buffer));

    if (transform === 'invert') {
      invertColors.invert(buffer, (invertedBuffer) => {
        fs.writeFile(outputPath, invertedBuffer, (err) => {
          if (err) {
            throw err;
          }
          logger.log(logger.INFO, `Transformed bitmap written to ${outputPath}`);
        });
      });
    } else if (transform === 'lighten') {
      lightenColors.lighten(buffer, (invertedBuffer) => {
        fs.writeFile(outputPath, invertedBuffer, (err) => {
          if (err) {
            throw err;
          }
          logger.log(logger.INFO, `Transformed bitmap written to ${outputPath}`);
        });
      });
      // console.log(parseBitmap.parse(buffer));
    } else {
      // todo: error handling
    }
  });
});
