'use strict';

var controllers = angular.module('dribbble.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Ajinkya";
});

controllers.controller('ShotsListCtrl', function ($scope, $routeParams, dribbbleS) {
	var list = $routeParams.list;

	dribbbleS.list(list).then(function (data) {
		$scope.list = data.data;
		//console.log(data);
	});

	$scope.loadNextpage = function () {
		dribbbleS.list(list, {page: $scope.list.page + 1}).then(function (data) {
			$scope.list.page = data.data.page;
			$scope.list.shots = $scope.list.shots.concat(data.data.shots);
		});
	};
});

controllers.controller('ShotsCtrl', function ($scope, $routeParams, dribbbleS) {
	var id = $routeParams.id;

	dribbbleS.shot(id).then(function (data) {
		$scope.shot = data.data;
	});
});