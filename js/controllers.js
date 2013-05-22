'use strict';

var controllers = angular.module('dribbble.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Ajinkya";
});

controllers.controller('ShotsListCtrl', function ($scope, $http, $routeParams) {
	var list = $routeParams.list;

	$http.jsonp('http://api.dribbble.com/shots/' + list + '?callback=JSON_CALLBACK').then(function (data) {
		$scope.list = data.data;
		console.log(data);
	});
});

controllers.controller('ShotsCtrl', function ($scope, $http, $routeParams) {
	var id = $routeParams.id;

	$http.jsonp('http://api.dribbble.com/shots/' + id + '?callback=JSON_CALLBACK').then(function (data) {
		$scope.shot = data.data;
	});
});