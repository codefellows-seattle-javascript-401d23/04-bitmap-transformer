const sunset = module.exports = {};

sunset.transform = (buffer, callback) => {
  const COLOR_TABLE_OFFSET = 54;
  const COLOR_TABLE_SIZE = 1024;

  const colorTable = buffer.slice(COLOR_TABLE_OFFSET, COLOR_TABLE_SIZE); 

  colorTable.reverse();

  console.log(colorTable);

  callback(buffer);
};
