var imposto = function(aliquota, desconto){
	this.aliquota = aliquota/100.00;
	this.desconto = desconto;
};

var impostoFactory = function(){
	this.obterImposto = function(salario){
		if (salario <= 1637.11 )
			return new imposto(0,0);
		else if (salario >= 1673.12 && salario <= 2453.50)
			return new imposto(7.5, 122.78);
		else if (salario >= 2453,51 && salario <= 3271.38)
			return new imposto(15, 306.80);
		else if (salario >= 3271.39 && salario <= 4087.65)
			return new imposto(22.5, 552.15);
		else
			return new imposto(27.5, 756.53); 	
	}
};

var calculadorImposto = function(){
	var impostoFact = new impostoFactory();
	this.obterValorImposto = function (salario){
		var imposto = impostoFact.obterImposto(salario);
		return ((salario * imposto.aliquota) - imposto.desconto).toFixed(2);
	}
};

module.exports = new calculadorImposto();
