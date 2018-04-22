const transform = require('./transform');

const parseBitmap = module.exports = {};

parseBitmap.parse = (error, buffer) => {
  if (error) {
    throw error;
  }
  const bitmapInfo = {};
  const randomNumber = Math.random() * ((5 - 2) + 2);

  bitmapInfo.HEIGHT_OFFSET = 22;
  bitmapInfo.COLOR_TABLE_OFFSET = 54;
  bitmapInfo.COLOR_TABLE_SIZE = 1000;
  bitmapInfo.allData = buffer;

  if (process.argv[4] === 'random') { transform.random(bitmapInfo, randomNumber); }
  if (process.argv[4] === 'darken') { transform.darken(bitmapInfo); }
  if (process.argv[4] === 'invert') { transform.invert(bitmapInfo); }
  if (process.argv[4] === 'spring') { transform.spring(bitmapInfo); }
};
