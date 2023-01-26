import _ from 'lodash';

export default function lodashForEach(array) {
    _.forEach(array, function(i) {
       void i;
    });
}
