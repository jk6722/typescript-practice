"use strict";
console.log(Symbol('foo') === Symbol('foo'));
const sym_ = Symbol();
const obj = {
    sym: 'value1',
    [sym_]: 'value2',
};
console.log(obj['sym']);
console.log(obj[sym_]);
