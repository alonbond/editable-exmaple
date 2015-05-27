app.controller('MainController', ['$scope', '$templateCache', function($scope, $templateCache){
	// $scope.outcomes = [];
	$scope.medicines = [{
		name: 'Example 0'
	}];
	var counter = 1; 

	$scope.addMedicine = function(){
		var medicine = {
			name: 'Example ' + counter
		};
		$scope.medicines.push(medicine);

		counter += 1;
	}

	$scope.removeMedicine = function(){
		$scope.medicines.pop();
	}
}]);
