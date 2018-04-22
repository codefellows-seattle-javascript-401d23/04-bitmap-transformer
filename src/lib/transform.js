const fileHandler = require('./read-write');

const transform = module.exports = {};

transform.darken = (object) => {
  const startValue = object.COLOR_TABLE_OFFSET;
  const size = object.COLOR_TABLE_SIZE;
  for (let i = startValue; i < startValue + size; i++) {
    const transformValue = (object.allData[i] / 4).toString(16);
    object.allData.write(transformValue, i, 'hex');
  }
  fileHandler.write(object.allData);
};

transform.random = (object, number) => {
  const startValue = object.COLOR_TABLE_OFFSET;
  const size = object.COLOR_TABLE_SIZE;
  for (let i = startValue; i < startValue + size; i++) {
    const transformValue = (object.allData[i] * number).toString(16);
    object.allData.write(transformValue, i, 'hex');
  }
  fileHandler.write(object.allData);
};

transform.invert = (object) => {
  const startValue = object.COLOR_TABLE_OFFSET;
  const size = object.COLOR_TABLE_SIZE;
  for (let i = startValue; i < startValue + size; i++) {
    const transformValue = (255 - object.allData[i]).toString(16);
    object.allData.write(transformValue, i, 'hex');
  }
  fileHandler.write(object.allData);
};

transform.spring = (object) => {
  const startValue = object.COLOR_TABLE_OFFSET;
  const size = object.COLOR_TABLE_SIZE;
  for (let i = startValue; i < startValue + size; i += 2) {
    const transformValue = ((
      object.allData[i] + object.allData[i + 1] + object.allData[i + 2]) / 3).toString(16);
    object.allData.write(transformValue, i, 3, 'hex');
  }
  fileHandler.write(object.allData);
};
