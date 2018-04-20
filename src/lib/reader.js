'use strict';

const fs = require('fs');


const fileReader = module.exports = {};

fileReader.readFirstNCharactersAsync = (filePath, callback) => {
  console.log(`Display ${filePath}`);
  return fs.readFile( 
    filePath,
    (error, result) => { 
      if (error) {
        throw error;
      }
      return callback(null, result.toString('utf8', 0));
    },
  );
};

