const fs = require('fs');
const orangify = require('./orangify');
const invert = require('./invert');
const nightVision = require('./nightVision');
const sunset = require('./sunset');

const fileReader = (readPath, writePath, transform) => {
  fs.readFile(readPath, (error, data) => {
    if (error) {
      throw error;
    } else {
      console.log(data);

      if (transform === 'invert') {
        invert.transform(data, (newData) => {
          fs.writeFile(writePath, newData, (err) => {
            if (err) throw err;
            console.log('new file saved');
          });
        });
      }

      if (transform === 'orangify') {
        orangify.transform(data, (newData) => {
          fs.writeFile(writePath, newData, (err) => {
            if (err) throw err;
            console.log('new file saved');
          });
        });
      }

      if (transform === 'nightvision') {
        nightVision.transform(data, (newData) => {
          fs.writeFile(writePath, newData, (err) => {
            if (err) throw err;
            console.log('new file saved');
          });
        });
      }

      if (transform === 'sunset') {
        sunset.transform(data, (newData) => {
          fs.writeFile(writePath, newData, (err) => {
            if (err) throw err;
            console.log('new file saved');
          });
        });
      }
    }
  });
};

fileReader('./src/__test__/asset/test.bmp', './src/__test__/asset/test2.bmp', 'invert');
