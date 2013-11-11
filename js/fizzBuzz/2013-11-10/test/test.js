var fizzBuzz = require('../fizzBuzz.js');
var assert = require('assert');
var test = new fizzBuzz();

it('should return fizz', function(){
	assert.equal('Fizz', test.doThatMagic(3));
});
