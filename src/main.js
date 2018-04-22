'use strict';

const parseBitmap = require('./lib/parse-bitmap');
const readWrite = require('./lib/read-write');

const handleTransform = (existingFile) => {
  readWrite.read(existingFile, parseBitmap.parse);
};

// SARAH - TODO: change to real folder when in production!! (is in test now)
handleTransform(`${__dirname}/__test__/assets/${process.argv[2]}`);
