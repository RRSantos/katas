var routeTemplateApp = angular.module('routeTemplateApp', [
	'ngRoute',
	'routeTemplateControllers'
	]);

routeTemplateApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
		when('/listarPessoas',{
			templateUrl:'pessoas-lista.html',
			controller:'ListagemPessoaCtrl'
		}).
		when('/editarPessoa/:idPessoa',{
			templateUrl:'editar-pessoa.html',
			controller:'EditarPessoaCtrl'
		}).
		otherwise({redirectTo:'/listarPessoas'});
	}
]);