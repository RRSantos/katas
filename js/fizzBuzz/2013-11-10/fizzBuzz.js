var FizzBuzz = function(){
	this.doThatMagic = function(value){
		var result;

		if (value % 3 === 0)
			result = 'Fizz';

		if (value % 5 ===0)
			result += 'Buzz';

		return result ? result : value;
	}
}

module.exports = FizzBuzz;
