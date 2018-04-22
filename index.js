'use strict';

require('dotenv').config();

process.env.NODE_ENV = 'production';

if (!process.env.NODE_ENV) {
  throw new Error('Undefined NODE_ENV');
}

if (process.env.NODE_ENV !== 'production') {
  require('babel-register');
  console.log('youre using babel and not in development');
}
if (process.env.NODE_ENV === 'production') {
  console.log('youre in development settings');
}

require('./src/lib/main');
