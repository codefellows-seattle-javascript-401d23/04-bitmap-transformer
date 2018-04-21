const fs = require('fs');

const monoChrome = module.exports = {};

monoChrome.transform = (writePath, parsedBitmap) => {
  parsedBitmap.data = 1;
};
