var assert = require("assert");
var fizzBuzz = require('../fizzBuzz.js');
var a = new fizzBuzz();

function showResultTests(){

	it("deve retornar Fizz quando o numero for multiplo de 3 e nao de 5", function(){
		for(var i=1; i<=4; i++){
			assert.equal('Fizz', a.showResult(3*i));
		};
	});

	it("deve retornar Buzz quando o numero for multiplo de 5 e nao de 3", function(){
		assert.equal('Buzz', a.showResult(5)); 
		assert.equal('Buzz', a.showResult(10)); 
		assert.equal('Buzz', a.showResult(20)); 
		assert.equal('Buzz', a.showResult(25)); 
		assert.equal('Buzz', a.showResult(35)); 
	});

	it("deve retornar FizzBuzz quando o numero for multiplo de 5 e de 3", function(){
		assert.equal('FizzBuzz', a.showResult(15)); 
		assert.equal('FizzBuzz', a.showResult(30)); 
		assert.equal('FizzBuzz', a.showResult(45)); 
		assert.equal('FizzBuzz', a.showResult(60)); 
		assert.equal('FizzBuzz', a.showResult(75)); 
	});
	
	it("deve retornar o proprio numero quando o numero nao for multiplo de 5 e nem de 3", function(){
		assert.equal('1', a.showResult(1)); 
		assert.equal('2', a.showResult(2)); 
		assert.equal('4', a.showResult(4)); 
		assert.equal('7', a.showResult(7)); 
		assert.equal('8', a.showResult(8)); 
	});
};

function doTests(){
	describe("FizzBuzz", function(){
		describe("#showResult", showResultTests);
	});
}

exports.doTests = doTests;
