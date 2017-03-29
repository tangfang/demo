'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:DaterangepickerdemoCtrl
 * @description
 * # DaterangepickerdemoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('DaterangepickerdemoCtrl', function ($scope) {
    $scope.reset = function(){
      $scope.startDate = moment().subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
      $scope.endDate = moment().format('YYYY-MM-DD HH:mm:ss');
    };
  });
