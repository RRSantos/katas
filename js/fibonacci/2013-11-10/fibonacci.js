var fibonacci = function(value){

	if (value <= 0)
		return 0;

	if (value <= 2)
		return 1;

	return fibonacci(value -2) + fibonacci(value -1);
}

exports.nthFibonacci = fibonacci;
