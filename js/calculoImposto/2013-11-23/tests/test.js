var assert = require('assert');
var calculadorImposto = require('../calculadorImposto.js');

describe('Calculador de impostos', function(){
	describe('Valores inferiores a R$ 1637,11', function(){
		var salario = 0;
		var impostoExpected = 0;
		
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});

		salario = 1000;
		impostoExpected = 0;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
		
		salario = 1637.11;
		impostoExpected = 0;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
	});
	
	describe('Valores entre R$ 1637,12 e R$ 2453,50', function(){
		var salario = 1637.20;
		var impostoExpected = 0.01;
		
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});

		salario = 2000;
		impostoExpected = 27,22;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
		
		salario = 2453.50;
		impostoExpected = 61.23;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
	});
	
	describe('Valores entre R$ 2453,51 e R$ 3271,38', function(){
		var salario = 2453.51;
		var impostoExpected = 61.23;
		
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});

		salario = 3000;
		impostoExpected = 143.20;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
		
		salario = 3271.38;
		impostoExpected = 183.91;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
	});
	
	describe('Valores entre R$ 3271,39 e R$ 4087,65', function(){
		var salario = 3271.39;
		var impostoExpected = 183.92;
		
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});

		salario = 4000;
		impostoExpected = 347.85;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
		
		salario = 4087.65;
		impostoExpected = 367.57;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
	});
	
	describe('Valores acima de 4087,65', function(){
		var salario = 4087.66;
		var impostoExpected = 367.58;
		
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});

		salario = 8000.99;
		impostoExpected = 1443.74;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
		
		salario = 12345.67;
		impostoExpected = 2638.53;
		it('Imposto de R$ ' + salario.toFixed(2) + ' deve ser R$ ' + impostoExpected.toFixed(2), function(){
			assert.equal(impostoExpected, calculadorImposto.obterValorImposto(salario));
		});
	});
});
