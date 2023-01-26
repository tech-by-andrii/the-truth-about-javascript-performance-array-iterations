const Benchmark = require('benchmark');

const forLoopWithLet = require('./itters/for_with_let');
const forIn = require('./itters/for_in');
const forOf = require('./itters/for_of');
const forEachLoop = require('./itters/for_each');
const ramdaForEach = require('./itters/ramda_each');
const lodashForEach = require('./itters/lodash_each');
const whileLoop = require('./itters/while');
const every = require('./itters/every');
const map = require('./itters/map');
const reduce = require('./itters/reduce');
const recursion = require('./itters/recursion');

const suite = new Benchmark.Suite;
Benchmark.options.minSamples = 200

const testSubject = Array(1000).fill(null);

function execute() {
    suite
        .add('`for` with `let`', function () {
            forLoopWithLet(testSubject);
        })
        .add('`for` with `in`', function () {
            forIn(testSubject);
        })
        .add('`for` with `of`', function () {
            forOf(testSubject);
        })
        .add('`while`', function () {
            whileLoop(testSubject);
        })
        .add('`#forEach`', function () {
            forEachLoop(testSubject);
        })
        .add('`Ramda #forEach`', function () {
            ramdaForEach(testSubject);
        })
        .add('`Lodash #forEach`', function () {
            lodashForEach(testSubject);
        })
        .add('`every`', function () {
            every(testSubject);
        })
        .add('`map`', function () {
            map(testSubject);
        })
        .add('`reduce`', function () {
            reduce(testSubject);
        })
        .add('`recursion`', function () {
            recursion(testSubject);
        })
        .on('cycle', function (event) {
            console.log(String(event.target));
        })
        .run({async: false});
}

module.exports = execute;
