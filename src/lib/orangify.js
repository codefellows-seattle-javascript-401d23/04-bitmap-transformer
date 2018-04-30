const orangify = module.exports = {};

orangify.transform = (buffer, callback) => {
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;

  const colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE); 

  for (let i = 0; i < colorTable.length; i++) {
    if (i % 4 === 0) {
      colorTable[i] = 256;
      colorTable[i + 2] = 200;
    }
  }

  console.log(colorTable);

  callback(buffer);
};
