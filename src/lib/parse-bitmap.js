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
  const COLOR_TABLE_SIZE = 1000; // Sarah - NEED TO ADJUST, THIS IS DUMMY SIZE

  bitmapInfo.allData = buffer;
  console.log(buffer);
  bitmapInfo.height = buffer.readUInt32LE(bitmapInfo.HEIGHT_OFFSET);
  // logger.log(logger.INFO, bitmapInfo.height);
  bitmapInfo.colorTable = buffer.slice(bitmapInfo.COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE);

  transform.flip(bitmapInfo);
  // if (process.argv[4] === 'greyscale') { transform.greyscale(bitmapInfo); }
  // if (process.argv[4] === 'flip') { transform.flip(bitmapInfo); }
  // if (process.argv[4] === 'watermark') { transform.watermark(bitmapInfo); }
  // if (process.argv[4] === 'border') { transform.border(bitmapInfo); }
};
