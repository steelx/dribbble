'use strict';

var app = angular.module('dribbble', ['dribbble.controllers']);

app.config(function ($routeProvider) {
	$routeProvider
	.when("/shots/:id", {controller:"ShotsCtrl", templateUrl:"partials/shot.html"})
	.when("/:list", {controller:"ShotsListCtrl", templateUrl:"partials/shots_list.html"})
	.otherwise({redirectTo:"/popular"});
});