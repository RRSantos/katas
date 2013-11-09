var FizzBuzz = require('../FizzBuzz.js');
var assert = require('assert');

var fizz = new FizzBuzz();

describe('FizzBuzz', function(){
	it('Should return Fizz', function(){
		assert('Fizz', fizz.doTransform(3));
	});
	it('Should return Buzz', function(){
		assert('Buzz', fizz.doTransform(5));
	});
	it('Should return FizzBuzz', function(){
		assert('FizzBuzz', fizz.doTransform(15));
	});
	it('Should return two', function(){
		assert('2', fizz.doTransform(2));
	});
});
