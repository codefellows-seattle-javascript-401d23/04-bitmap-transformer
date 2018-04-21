const lightenColors = module.exports = {};

lightenColors.lighten = (buffer, callback) => {
  // TODO: add error checks
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1000;

  for (let i = COLOR_TABLE_OFFSET; i < COLOR_TABLE_OFFSET + COLOR_TABLE_SIZE; i++) {
    // lighten
    const newValue = (buffer[i] * 1.25).toString(16);
    buffer.write(newValue, i, i, 'hex');
  }
  return callback(buffer);
};
