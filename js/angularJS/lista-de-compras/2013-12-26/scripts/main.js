function ListaComprasController($scope, $http, $window){

	$scope.items = [];

	var lastId = $scope.items.length >0 ? $scope.items[$scope.items.length - 1].id : 0;
	var reset = function(){
		$scope.item = {id:0, produto:'', quantidade:undefined}
	};
	reset();

	$scope.getQuantidadeTotal = function(){
		var total = 0;
		//$window.console.log('total: ' + $scope.items.length);
		if ($scope.items.length == 0)
			return total;

		for (var i = $scope.items.length - 1; i >= 0; i--) {
			total += $scope.items[i].quantidade;
		}

		return total;
	};
	var isModelValid = function(){
		var quantidade = parseInt($scope.item.quantidade);
		if (isNaN(quantidade))
		{
			alert('Quantidade não é um valor inteiro válido.')
			return false;
		}

		return true;

		
	}
	$scope.salvar = function(){
		if (isModelValid())
		{
			if ($scope.item.id <= 0){
				lastId++;
				$scope.item.id = lastId;
				$scope.items.push($scope.item);
			}

			reset();
		}
	}

	$scope.excluirItem = function(item){
		var index  = $scope.items.indexOf(item);
		$scope.items.splice(index,1);
	}

	$scope.editarItem = function(item){
		
		$scope.item = item;
	}
}
