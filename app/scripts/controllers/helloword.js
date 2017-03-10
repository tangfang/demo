'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:HellowordCtrl
 * @description
 * # HellowordCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('HellowordCtrl', function ($scope) {
    $scope.user = {
      name: 'Hello Word111111',
      description: '123456'
    };

    $scope.btnClick = function(){
      console.log($scope.user);
    };

    $scope.regions = [{
      "uuid": "1001",
      "vregionName": "北京",
      "description": "北京域描述北京域描述北京域描述北京域描述"
    },{
      "uuid": "1002",
      "vregionName": "上海"
    },{
      "uuid": "1003",
      "vregionName": "广州"
    }];
  });
