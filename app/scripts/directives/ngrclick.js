'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:ngRClick
 * @description
 * # ngRClick
 */
angular.module('demoApp')
  .directive('ngRClick', function($parse) {
    return function(scope, element, attrs) {
      var fn = $parse(attrs.ngRClick);
      element.bind('contextmenu', function(event) {
        scope.$apply(function() {
          event.preventDefault();
          fn(scope, {
            $event: event
          });
        });
      });
    };
  });