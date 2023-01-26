function operation(array, i) {
    if (i >= array.length) {
        return;
    }

    void array[i];
    operation(array, i + 1)
}

export default function recursion(array) {
    operation(array, 0);
}
