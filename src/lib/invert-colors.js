const invertColors = module.exports = {};

invertColors.invert = (buffer) => {
  // TODO: add error checks
  const COLOR_TABLE_OFFSET = 54;
  // const COLOR_TABLE_SIZE = 1000;

  for (let i = COLOR_TABLE_OFFSET; i < COLOR_TABLE_OFFSET + 1000; i++) {
    // darken
    // const newValue = (buffer[i] / 3).toString(16);
    // lighten
    const newValue = (buffer[i] * 1.3).toString(16);
    // invert
   // const newValue = (255 - buffer[i]).toString(16);
    buffer.write(newValue, i, i, 'hex');
  }
console.log(buffer);
  return buffer;
};

