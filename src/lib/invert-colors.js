const invertColors = module.exports = {};

invertColors.invert = (buffer, callback) => {
  // TODO: add error checks
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1000;

  for (let i = COLOR_TABLE_OFFSET; i < COLOR_TABLE_OFFSET + COLOR_TABLE_SIZE; i++) {
    // invert
    const newValue = (255 - buffer[i]).toString(16);
    buffer.write(newValue, i, i, 'hex');
  }
  return callback(buffer);
};
