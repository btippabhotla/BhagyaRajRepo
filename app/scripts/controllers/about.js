'use strict';
angular.module('bhagyarajCodingApp')
  .controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.records = {};
  	$scope.generatedRecords = [];
    $http.get('JsonData/generated.json').then(function(response) {
        //$scope.records = response.data;
        console.log($scope.records);	    	    
  	});
}]);
