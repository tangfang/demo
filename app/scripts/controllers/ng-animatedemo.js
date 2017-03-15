'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:NgAnimatedemoCtrl
 * @description
 * # NgAnimatedemoCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('NgAnimatedemoCtrl', function ($scope, $timeout) {
    var list = [{
      uuid: '1001',
      resourceType: '云主机1',
      propertyDisplay: '云主机1',
      subOrder_Properties: [{
        sequence: 1,
        isshow: '1',
        propertyValue: '1',
        propertyName: 'CPU'
      }]
    },{
      uuid: '1002',
      resourceType: '云主机2',
      propertyDisplay: '云主机2',
      subOrder_Properties: [{
        sequence: 2,
        isshow: '1',
        propertyValue: '1',
        propertyName: 'resource_pool'
      }]
    }];
    $scope.subOrders = [];
    angular.forEach(list, function(item, i){
      $timeout(function() {
        $scope.subOrders.push(item);
      }, 100 * i);
    });
  });
