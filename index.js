'use strict';

require('dotenv').config();
const logger = require('./src/lib/logger');

logger.log(logger.VERBOSE, [
  `Input Filepath: ${process.argv[2]}`, 
  `Output Filepath: ${process.argv[3]}`, 
  `Transformation method: ${process.argv[4]}`,
]);

// if (!process.env.NODE_ENV) {
//   throw new Error('NODE_ENV not defined');
// }

// if (process.env.NODE_ENV !== 'production') {
//   require('babel-register');
// }

require('./src/main');
