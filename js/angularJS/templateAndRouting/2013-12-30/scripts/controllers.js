var pessoasDisponiveis = [
			{id:1, "nome":"Rodrigo", "idade":29},
			{id:2, "nome":"Carol", "idade":31},
			{id:3, "nome":"Lorena", "idade":1}
		];

var obterPessoaPorId = function(idPessoa){
	for (var i = pessoasDisponiveis.length - 1; i >= 0; i--) {
		if (pessoasDisponiveis[i].id == idPessoa)
			return pessoasDisponiveis[i];
		};

		return {id:0, "nome":"", "idade":0}
}

var routeTemplateControllers = angular.module('routeTemplateControllers', []);

routeTemplateControllers.controller('ListagemPessoaCtrl', ['$scope', '$http',
	function($scope, $http){
		$scope.pessoas = pessoasDisponiveis
	}
]);

routeTemplateControllers.controller('EditarPessoaCtrl', ['$scope', '$routeParams', '$window',
	function($scope, $routeParams, $window){
		var pessoaOriginal = obterPessoaPorId($routeParams.idPessoa);
		$scope.pessoa = angular.copy(pessoaOriginal);

		$scope.salvar = function(){
			if (pessoaOriginal.id > 0){
				var index = pessoasDisponiveis.indexOf(pessoaOriginal);
				pessoasDisponiveis[index] = $scope.pessoa;	
			}
			else{
				pessoasDisponiveis.push($scope.pessoa);
			}
			
			$window.history.back();
		};

		$scope.cancelar = function(){
			$window.history.back();
		};

	}
]);

