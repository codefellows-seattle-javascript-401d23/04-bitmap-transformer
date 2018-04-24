const transform = require('./transform');
const fileHandler = require('./read-write');
const logger = require('./logger');

const parseBitmap = module.exports = {};

parseBitmap.parse = (error, buffer, transformType) => {
  if (error) {
    logger.log(logger.ERROR, `parseBitmap.parse: ${error}`);
    throw error;
  }
  const bitmapInfo = {};
  const randomNumber = Math.random() * ((5 - 2) + 2);

  bitmapInfo.HEIGHT_OFFSET = 22;
  bitmapInfo.COLOR_TABLE_OFFSET = 54;
  bitmapInfo.COLOR_TABLE_SIZE = 1000;
  bitmapInfo.allData = buffer;

  const newFilePath = `${__dirname}/../assets/${process.argv[3]}`;

  if (transformType === 'random') { transform.random(bitmapInfo, randomNumber, newFilePath, fileHandler.write); }
  if (transformType === 'darken') { transform.darken(bitmapInfo, newFilePath, fileHandler.write); }
  if (transformType === 'invert') { transform.invert(bitmapInfo, newFilePath, fileHandler.write); }
  if (transformType === 'spring') { transform.spring(bitmapInfo, newFilePath, fileHandler.write); }
};
