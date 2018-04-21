const transform = require('./transform');
// const logger = require('./logger');

const parseBitmap = module.exports = {};

parseBitmap.parse = (error, buffer) => {
  if (error) {
    throw error;
  }
  const bitmapInfo = {};

  bitmapInfo.HEIGHT_OFFSET = 22;
  bitmapInfo.COLOR_TABLE_OFFSET = 54;
  bitmapInfo.COLOR_TABLE_SIZE = 1000; // Sarah - NEED TO ADJUST, THIS IS DUMMY SIZE

  bitmapInfo.allData = buffer;
  bitmapInfo.height = buffer.readUInt32LE(bitmapInfo.HEIGHT_OFFSET);
  // logger.log(logger.INFO, bitmapInfo.height);
  bitmapInfo.colorTable = buffer.slice(bitmapInfo.COLOR_TABLE_OFFSET, bitmapInfo.COLOR_TABLE_SIZE);
  const randomNumber = Math.random() * ((5 - 2) + 2);
  transform.random(bitmapInfo, randomNumber);
  // if (process.argv[4] === 'greyscale') { transform.greyscale(bitmapInfo); }
  if (process.argv[4] === 'darken') { transform.darken(bitmapInfo); }
  if (process.argv[4] === 'invert') { transform.invert(bitmapInfo); }
  if (process.argv[4] === 'spring') { transform.spring(bitmapInfo); }
};
