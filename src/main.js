'use strict';

const fs = require('fs');
const parseBitmap = require('./lib/parse-bitmap');

const transformedFilePath = process.argv[3];
const filePath = process.argv[2];
const transformMethod = process.argv[4];

const writeFile = (data, callback) => {
  fs.writeFile(`${__dirname}/assets/${transformedFilePath}`, data, (error) => {
    if (error) {
      throw error;
    } 
    return callback;
  });
};

const writeConfirmation = (err) => {
  if (err) return err;
  console.log(`*** Confirmed file path here: ${transformedFilePath}`);
  return undefined;
};

fs.readFile(`${__dirname}/assets/${filePath}`, (error, buffer) => {
  if (error) {
    throw error;
  }
  parseBitmap.parse(buffer, transformMethod, writeFile, writeConfirmation);
});
