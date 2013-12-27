function ListaComprasController($scope, $http, $window){

	$scope.items = [
		{id:1, produto:"Leite", quantidade:2},
		{id:2, produto:"Cerveja", quantidade:12}
	];

	var lastId = $scope.items[$scope.items.length - 1].id;
	var reset = function(){
		$scope.item = {id:0, produto:'', quantidade:undefined}
	};
	reset();

	$scope.getQuantidadeTotal = function(){
		var total = 0;
		for (var i = $scope.items.length - 1; i >= 0; i--) {
			total += $scope.items[i].quantidade;
		}

		return total;
	};

	$scope.salvar = function(){
		
		if ($scope.item.id <= 0){
			lastId++;
			$scope.item.id = lastId;
			$scope.items.push($scope.item);
		}

		reset();
	}

	$scope.excluirItem = function(item){
		var index  = $scope.items.indexOf(item);
		$scope.items.splice(index,1);
	}

	$scope.editarItem = function(item){
		
		$scope.item = item;
	}
}