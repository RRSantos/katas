var routeTemplateControllers = angular.module('routeTemplateControllers', []);

routeTemplateControllers.controller('ListagemPessoaCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('data/pessoas.json').success(function(data){			
			$scope.pessoas = data;
		});
	}])