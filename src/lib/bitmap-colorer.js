'use strict';

const colorBitmap = module.exports = {};

colorBitmap.colorize = (parsedBuffer) => {
  // Sean - TODO: Add error Checks
  const colorTableBuffer = parsedBuffer.colorTable;
  let counter = 0;
  while (counter < colorTableBuffer.length - [counter + 1]) {
    const temp = colorTableBuffer[counter];
    colorTableBuffer[counter] = colorTableBuffer[colorTableBuffer.length - [counter + 1]];
    colorTableBuffer[colorTableBuffer.length - [counter + 1]] = temp;
    counter += 1;
  }
  return parsedBuffer;
};
