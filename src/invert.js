
const invert = module.exports = {};

invert.transform = (buffer, callback) => {
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;

  const colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE); 

  for (let i = 0; i < colorTable.length; i++) {
    colorTable[i] = 256 - colorTable[i];
  }

  console.log(colorTable);

  callback(buffer);
};
