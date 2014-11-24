var blogApp = angular.module("blogApp", []);

blogApp.controller("mainCtrl", ['$scope', function($scope){

	$scope.test = "Hello World!";
}]);
