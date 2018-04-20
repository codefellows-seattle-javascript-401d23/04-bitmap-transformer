'use strict';

require('dotenv').config();

if (!process.env.NODE_ENV) {
  throw new Error('Undefined NODE_ENV');
}

// this loads Babel in the development environment

if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
}

require('./src/main');