var blogApp = angular.module("blogApp", []);

blogApp.controller("mainCtrl", ['$scope', function($scope){

	$scope.test = "Hello World!";

	$scope.blogs = [
		{
			"title" : "First trial",
			"content" : "Hope it comes out well"
		},
		{
			"title" : "First Blog",
			"content" : "This is my first blog"
		},
		{
			"title" : "Analytics In Gaming",
			"content" : "Go Google It First."
		}
	];
}]);
