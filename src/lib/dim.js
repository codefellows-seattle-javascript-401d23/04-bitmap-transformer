'use strict';

module.exports = (buffer) => {
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;
  for (let i = COLOR_TABLE_OFFSET; i < COLOR_TABLE_SIZE; i++) {
    if (buffer[i] > 150) {
      buffer[i] = buffer[i / 2];
    }
  }
  return buffer;
};
