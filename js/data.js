var blogApp = angular.module("blogApp", []);

blogApp.controller("mainCtrl", ['$scope', function($scope){

	$scope.test = "Hello World!";

	$scope.blogs = [
		{
			"title" : "First Blog",
			"content" : "This is my first blog"
		}
	];
}]);
