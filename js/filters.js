'use strict';

var filters = angular.module('dribbble.filters', []);

filters.filter('dribbbleDate', function ($filter) {

	return function (value, format) {
		if (value) { 
			value = Date.parse(value);
		};
		return $filter('date')(value, format);
	};

});