'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:CkeditordemoCtrl
 * @description
 * # CkeditordemoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('CkeditordemoCtrl', function ($scope) {
    $scope.info = {};
    $scope.btnSubmit = function(){
      console.info($scope.info);
    };
  });
