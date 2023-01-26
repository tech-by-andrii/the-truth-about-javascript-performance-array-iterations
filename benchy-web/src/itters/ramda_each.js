import * as R from 'rambda';

export default function ramdaForEach(array) {
    R.forEach((i) => {
        void i;
    }, array);
}
