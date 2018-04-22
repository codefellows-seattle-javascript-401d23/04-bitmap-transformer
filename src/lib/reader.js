'use strict';

const fs = require('fs');

const fileReader = module.exports = {};

fileReader.readAsync = (bitmapPath, callback) => {
  try {
    fs.readFile(
      bitmapPath,
      (error, result) => {
        if (typeof bitmapPath !== 'string') {
          throw error;
        }
        return callback(Buffer.from(result));
      },
    );
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

