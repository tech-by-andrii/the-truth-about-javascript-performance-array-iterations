module.exports = function forWithIn(array) {
    for (let i in array) {
        void array[i];
    }
}
