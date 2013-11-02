function FizzBuzz(){
	this.showResult = function(value){
		var result = ''; 
		if (value % 3 === 0)
			result = 'Fizz';
		if (value % 5 === 0)
			result += 'Buzz';

		if	(result === '')
			result = value;

		return result;
	}
}

module.exports = FizzBuzz;
