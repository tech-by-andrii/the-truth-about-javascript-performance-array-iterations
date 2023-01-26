import Benchmark from 'benchmark';

import forLoopWithLet from './itters/for_with_let';
import forIn from './itters/for_in';
import forOf from './itters/for_of';
import forEachLoop from './itters/for_each';
import whileLoop from './itters/while';
import every from './itters/every';
import map from './itters/map';
import reduce from './itters/reduce';
import ramdaForEach from "./itters/ramda_each";
import lodashForEach from "./itters/lodash_each";
import recursion from "./itters/recursion";

const suite = new Benchmark.Suite;
Benchmark.options.minSamples = 200

const testSubject = Array(1000).fill(null);

export default function execute() {
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
