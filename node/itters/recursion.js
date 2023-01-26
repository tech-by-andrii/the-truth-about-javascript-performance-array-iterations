function operation(array, i) {
    if (i >= array.length) {
        return;
    }

    void array[i];
    operation(array, i + 1)
}

module.exports = function recursion(array) {
    operation(array, 0);
}
