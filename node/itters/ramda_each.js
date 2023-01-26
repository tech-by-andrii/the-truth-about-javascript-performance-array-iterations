const R = require('rambda');

module.exports = function ramdaForEach(array) {
    R.forEach((i) => {
        void i;
    }, array);
}
