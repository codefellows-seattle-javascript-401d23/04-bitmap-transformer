'use strict';

// const transform = require('./lib/transform');
const parseBitmap = require('./lib/parse-bitmap');
const readWrite = require('./lib/read-write');

// const inputFilePath = process.argv[2];
// const outputFilePath = process.argv[3];
// const transformName = process.argv[4];

// const handleTransform = (existingFile, newFile, typeOfTransform) => {
//   readWrite.read(existingFile, parseBitmap.parse());
// };

const handleTransform = (existingFile) => {
  readWrite.read(existingFile, parseBitmap.parse);
};

handleTransform(`${__dirname}/__test__/assets/house.bmp`);
