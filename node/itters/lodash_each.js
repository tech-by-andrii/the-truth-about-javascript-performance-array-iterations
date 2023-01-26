const _ = require('lodash');

module.exports = function lodashForEach(array) {
    _.forEach(array, function(i) {
       void i;
    });
}
