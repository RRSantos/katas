var routeTemplateApp = angular.module('routeTemplateApp', [
	'ngRoute',
	'routeTemplateControllers'
	]);

routeTemplateApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.
		when('/',{
			templateUrl:'pessoas-lista.html',
			controller:'ListagemPessoaCtrl'
		});
	}
]);