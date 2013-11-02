var fizzBuzzClass = require ("../fizzBuzz.js");
var assert = require("assert");
var fizzBuzz = new fizzBuzzClass();

function doFizzBuzzTests(){
	describe("FizzBuzz", function(){
		describe("#getResult", function(){
			
			it("should return Fizz", function(){
				assert(fizzBuzz.getResult(3), "Fizz");
				assert(fizzBuzz.getResult(6), "Fizz");
				assert(fizzBuzz.getResult(9), "Fizz");
				assert(fizzBuzz.getResult(12), "Fizz");
				assert(fizzBuzz.getResult(18), "Fizz");
				assert(fizzBuzz.getResult(21), "Fizz");
				assert(fizzBuzz.getResult(24), "Fizz");
			});
			
			it("should return Buzz", function(){
				assert(fizzBuzz.getResult(5), "Buzz");
				assert(fizzBuzz.getResult(10), "Buzz");
				assert(fizzBuzz.getResult(20), "Buzz");
				assert(fizzBuzz.getResult(25), "Buzz");
				assert(fizzBuzz.getResult(30), "Buzz");
				assert(fizzBuzz.getResult(35), "Buzz");
				assert(fizzBuzz.getResult(40), "Buzz");
			});
			
			it("should return FizzBuzz", function(){
				assert(fizzBuzz.getResult(15), "FizzBuzz");
				assert(fizzBuzz.getResult(30), "FizzBuzz");
				assert(fizzBuzz.getResult(45), "FizzBuzz");
				assert(fizzBuzz.getResult(60), "FizzBuzz");
				assert(fizzBuzz.getResult(75), "FizzBuzz");
				assert(fizzBuzz.getResult(90), "FizzBuzz");
				assert(fizzBuzz.getResult(105), "FizzBuzz");
			});
			
			it("should return the value", function(){
				assert(fizzBuzz.getResult(1), "1");
				assert(fizzBuzz.getResult(2), "2");
				assert(fizzBuzz.getResult(4), "4");
				assert(fizzBuzz.getResult(22), "22");
				assert(fizzBuzz.getResult(133), "133");
				assert(fizzBuzz.getResult(11), "11");
				assert(fizzBuzz.getResult(97521), "97521");
			});
		});
	});
}


exports.doTests = doFizzBuzzTests;
