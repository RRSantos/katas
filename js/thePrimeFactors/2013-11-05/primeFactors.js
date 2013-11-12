var primeFactors = function(value){

	var factors = [];
	var divisor = 2;
	while ((value > 1) ){
		if (value % divisor === 0){
			factors.push(divisor);
			value = value / divisor;
		}
		else{
			divisor++;
		}
	}

	return factors;

}

exports.getPrimeFactorsOf = primeFactors;
