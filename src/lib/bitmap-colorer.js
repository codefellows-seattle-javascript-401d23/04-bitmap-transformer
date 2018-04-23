'use strict';

const colorBitmap = module.exports = {};

colorBitmap.invertColor = (parsedBuffer) => {
  // Sean - TODO: Add error Checks
  const colorTableBuffer = parsedBuffer.colorTable;
  console.log(colorTableBuffer[0]);
  let counter = 0;
  while (counter < colorTableBuffer.length - [counter + 1]) {
    const temp = colorTableBuffer[counter];
    colorTableBuffer[counter] = colorTableBuffer[colorTableBuffer.length - [counter + 1]];
    colorTableBuffer[colorTableBuffer.length - [counter + 1]] = temp;
    counter += 1;
  }
  // for (let i = 0; i < colorTableBuffer.length; i++) {
  //   colorTableBuffer[i] = 255 - colorTableBuffer[i];
  // }
  // console.log(parsedBuffer);
  return parsedBuffer;
};
