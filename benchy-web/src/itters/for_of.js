export default function forWithOf(array) {
    for (let i of array) {
        void array[i];
    }
}
