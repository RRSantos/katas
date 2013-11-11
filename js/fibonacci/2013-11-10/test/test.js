var fib = require('../fibonacci.js');
var assert = require('assert');
describe('Fibonacci test', function(){

	it('fib(0) should return 0', function(){
		assert.equal('0', fib.nthFibonacci(0));
	});
	it('fib(1) should return 1', function(){
		assert.equal('1', fib.nthFibonacci(1));
	});
	it('fib(2) should return 1', function(){
		assert.equal('1', fib.nthFibonacci(2));
	});
	it('fib(3) should return 2', function(){
		assert.equal('2', fib.nthFibonacci(3));
	});
	it('fib(4) should return 3', function(){
		assert.equal('3', fib.nthFibonacci(4));
	});
	it('fib(5) should return 5', function(){
		assert.equal('5', fib.nthFibonacci(5));
	});
	it('fib(6) should return 8', function(){
		assert.equal(8, fib.nthFibonacci(6));
	});
});
