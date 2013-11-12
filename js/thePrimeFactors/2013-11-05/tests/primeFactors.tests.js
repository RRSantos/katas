var assert = require('assert');
var primeFactor = require('../primeFactors.js');
var testFactorsOfTwo = function(){
	it('testMultiplesOfTwo', function(){
		assert.deepEqual([2], primeFactor.getPrimeFactorsOf(2));
	});
};

var testFactorsOfThree = function(){
	it('testMultiplesOfThree', function(){
		assert.deepEqual([3], primeFactor.getPrimeFactorsOf(3));
	});
};

var testFactorsOfFour = function(){
	it('testMultiplesOfFour', function(){
		assert.deepEqual([2,2], primeFactor.getPrimeFactorsOf(4));
	});
};

var testFactorsOfFive = function(){
	it('testMultiplesOfFive', function(){
		assert.deepEqual([5], primeFactor.getPrimeFactorsOf(5));
	});
};


var testFactorsOfSix = function(){
	it('testMultiplesOfSix', function(){
		assert.deepEqual([2,3], primeFactor.getPrimeFactorsOf(6));
	});
};

var testFactorsOfSeven = function(){
	it('testMultiplesOfSeven', function(){
		assert.deepEqual([7], primeFactor.getPrimeFactorsOf(7));
	});
};

var testFactorsOfEight = function(){
	it('testMultiplesOfEight', function(){
		assert.deepEqual([2,2,2], primeFactor.getPrimeFactorsOf(8));
	});
};


var testFactorsOfNine = function(){
	it('testMultiplesOfNine', function(){
		assert.deepEqual([3,3], primeFactor.getPrimeFactorsOf(9));
	});
};

var testFactorsOfTen = function(){
	it('testMultiplesOfTen', function(){
		assert.deepEqual([2,5], primeFactor.getPrimeFactorsOf(10));
	});
};

var testFactorsOfZero = function(){
	it('testMultiplesOfZero', function(){
		assert.deepEqual([], primeFactor.getPrimeFactorsOf(0));
	});
};


var testFactorsOfSixtyFour = function(){
	it('testMultiplesOfSixtyFour', function(){
		assert.deepEqual([2,2,2,2,2,2], primeFactor.getPrimeFactorsOf(64));
	});
};

var doTests = function(){
	describe("primeFactors", function(){
		describe("#getPrimeFactorsOf", function(){
			testFactorsOfZero();
			testFactorsOfTwo();
			testFactorsOfThree();
			testFactorsOfFour();
			testFactorsOfFive();
			testFactorsOfSix();
			testFactorsOfSeven();
			testFactorsOfEight();
			testFactorsOfNine();
			testFactorsOfTen();
			testFactorsOfSixtyFour();
		});
	});
};



exports.doTests = doTests;
