'use strict';

const fs = require('fs');
const logger = require('./lib/logger');
const readline = require('readline');
const parseBitmap = require('./lib/parse-bitmap');
const invertColors = require('./lib/invert-colors');
const lightenColors = require('./lib/lighten-colors');
const decreaseSize = require('./lib/decrease-size');

// todo: take in <input file name>, <output file name>, <transform> from user


let inputPath = `${__dirname}/assets/house.bmp`;
// const outputPath = `${__dirname}/assets/newBitmap.bmp`;
let outputPath = '';
let transform = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter an input file ending with .bmp, found in the ./assets folder:\n', (inputFile) => {
  if (inputFile !== '') {
    inputPath = `${__dirname}/assets/${inputFile}`;
    console.log(`file name received: ${inputFile}`);
  } else {
    console.log('file name received: house.bmp');
  }
  rl.question('Please enter a transform name. Choices: "invert" or "lighten" or "shrink".\n', (transformName) => {
    transform = transformName;
    rl.question('Please enter an output file name, ending with ".bmp":\n', (outputFile) => {
      outputPath = `${__dirname}/assets/${outputFile}`;
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
              logger.log(logger.INFO, `Transformed bitmap written to ./assets/${outputFile}`);
            });
          });
        } else if (transform === 'lighten') {
          lightenColors.lighten(buffer, (invertedBuffer) => {
            fs.writeFile(outputPath, invertedBuffer, (err) => {
              if (err) {
                throw err;
              }
              logger.log(logger.INFO, `Transformed bitmap written to ./assets/${outputFile}`);
            });
          });
          // console.log(parseBitmap.parse(buffer));
        } else if (transform === 'shrink') {
          decreaseSize.resize(buffer, (invertedBuffer) => {
            fs.writeFile(outputPath, invertedBuffer, (err) => {
              if (err) {
                throw err;
              }
              logger.log(logger.INFO, `Transformed bitmap written to ./assets/${outputFile}`);
            });
          });
          // console.log(parseBitmap.parse(buffer));
        } else {
          // todo: error handling
        }
      });
    });
  });
});