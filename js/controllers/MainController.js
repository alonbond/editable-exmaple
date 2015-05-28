app.controller('MainController', ['$scope', '$templateCache', function($scope, $templateCache){
	// $scope.outcomes = [];
	$scope.contarindications = [{
		name: 'Example 0',
	}];
	var counter = 1; 

	$scope.addContraindication = function(){
		var contarindication = {
			name: 'Example ' + counter
		};
		$scope.contarindications.push(contarindication);

		counter += 1;
	}

	$scope.removeContraindication = function(){
		$scope.contarindications.pop();
	}
}]);
