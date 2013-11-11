var f = require('../factorial.js');
var assert = require('assert');

it('0! should return 1', function(){
	assert.equal(1, f.factorialOf(0));
});
it('1! should return 1', function(){
	assert.equal(1, f.factorialOf(1));
});
it('2! should return 2', function(){
	assert.equal(2, f.factorialOf(2));
});
it('3! should return 6', function(){
	assert.equal(6, f.factorialOf(3));
});
it('10! should return 3628800', function(){
	assert.equal(3628800, f.factorialOf(10));
});
