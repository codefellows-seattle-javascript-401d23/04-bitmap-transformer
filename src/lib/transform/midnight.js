'use strict';

const midnight = exports.module = {};
const parseBitmap = require('../../lib/parse-bitmap');

midnight.toMidnight = (obj) => {
    return obj.colorTable.fill(0);
};


